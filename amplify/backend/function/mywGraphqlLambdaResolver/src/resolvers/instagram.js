const {
  addIGVideo,
  updateIGVideo,
  getInfluencersIGRepository,
  createSubSectionIGItems,
  getSubSectionIGItems,
  deleteSubSectionIGItems,
  createIGSubSection,
} = require("../lib/instagram");
const { storeThumnailToS3, storeVideoToS3 } = require("../lib/index");
const { checkIGRepositoryVideos } = require("../helpers/instagram");

const syncInstagramRepository = async ({ identity, arguments }) => {
  try {
    const { videos } = arguments.input;
    const influencerId = `${identity.sub}::${identity.username}`;

    const instagramRepository = await getInfluencersIGRepository(influencerId);

    const { videosToArchive, videosToUnarchive, videosToStore } =
      checkIGRepositoryVideos(videos, instagramRepository);

    await Promise.all([
      ...videosToStore.map(async (video) => {
        video.thumbnailUrl = await storeThumnailToS3(
          video.thumbnailUrl,
          `public/ig/thumbnail/${video.videoId}-${new Date().valueOf()}`
        );

        video.sourceMediaUrl = await storeVideoToS3(
          video.sourceMediaUrl,
          `public/ig/video/${video.videoId}-${new Date().valueOf()}`
        );

        return addIGVideo(video, influencerId);
      }),
      ...videosToArchive.map((video) =>
        updateIGVideo(video.id, { isArchived: true })
      ),
      ...videosToUnarchive.map((video) =>
        updateIGVideo(video.id, { isArchived: false })
      ),
    ]);

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    console.log(error);
    return { code: "FAILED", message: error.message };
  }
};

const createInstagramItems = async ({ identity, arguments }) => {
  try {
    const { input, sectionId, subSectionId } = arguments;
    const { videos } = input;

    const influencerId = `${identity.sub}::${identity.username}`;

    const instagramRepository = await getInfluencersIGRepository(influencerId);

    const { videosToUnarchive, videosToStore, videoToIgnore } =
      checkIGRepositoryVideos(videos, instagramRepository);

    const igCollection = await Promise.all([
      ...videosToStore.map(async (video) => {
        video.thumbnailUrl = await storeThumnailToS3(
          video.thumbnailUrl,
          `public/ig/thumbnail/${video.videoId}-${new Date().valueOf()}`
        );

        video.sourceMediaUrl = await storeVideoToS3(
          video.sourceMediaUrl,
          `public/ig/video/${video.videoId}-${new Date().valueOf()}`
        );
        return addIGVideo(video, influencerId);
      }),
      ...videosToUnarchive.map((video) =>
        updateIGVideo(video.id, { isArchived: false })
      ),
      ...videoToIgnore,
    ]);

    if (sectionId) {
      if (subSectionId) {
        const subSectionIGItemsRepo = await getSubSectionIGItems(subSectionId);
        await Promise.all([
          ...igCollection.map(async (collection) => {
            const subSecctionIGItem = subSectionIGItemsRepo.find(
              (s) => s.instagramVideoId === collection.id
            );
            if (!subSecctionIGItem) {
              await createSubSectionIGItems({
                subSectionId,
                instagramVideoId: collection.id,
                influencerId,
              });
            }
          }),
          ...subSectionIGItemsRepo.map(async (item) => {
            const subSecctionIGItem = igCollection.find(
              (s) => s.id === item.instagramVideoId
            );
            if (!subSecctionIGItem) {
              await deleteSubSectionIGItems(item.id);
            }
          }),
        ]);
      } else {
        const subSection = await createIGSubSection(sectionId, influencerId);
        await Promise.all(
          igCollection.map((item) =>
            createSubSectionIGItems({
              subSectionId: subSection.id,
              instagramVideoId: item.id,
              influencerId,
            })
          )
        );
      }
    }

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    console.log(error);
    return { code: "FAILED", message: error.message };
  }
};

module.exports = {
  syncInstagramRepository,
  createInstagramItems,
};
