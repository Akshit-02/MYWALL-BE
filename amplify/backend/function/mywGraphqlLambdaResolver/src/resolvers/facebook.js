const {
  getInfluencersFBRepository,
  addFBVideo,
  updateFBVideo,
  createSubSectionFBItems,
  getSubSectionFBItems,
  deleteSubSectionFBItems,
  createFBSubSection,
} = require("../lib/facebook.js");
const { storeThumnailToS3, storeVideoToS3 } = require("../lib/index");
const { checkFBRepositoryVideos } = require("../helpers/facebook.js");

const syncFacebookRepository = async ({ identity, arguments }) => {
  try {
    const { videos } = arguments.input;
    const influencerId = `${identity.sub}::${identity.username}`;

    const facebookRepository = await getInfluencersFBRepository(influencerId);

    const { videosToArchive, videosToUnarchive, videosToStore } =
      checkFBRepositoryVideos(videos, facebookRepository);

    await Promise.all([
      ...videosToStore.map(async (video) => {
        video.thumbnailUrl = await storeThumnailToS3(
          video.thumbnailUrl,
          `public/fb/thumbnail/${video.videoId}-${new Date().valueOf()}`
        );

        video.sourceMediaUrl = await storeVideoToS3(
          video.sourceMediaUrl,
          `public/fb/video/${video.videoId}-${new Date().valueOf()}`
        );

        return addFBVideo(video, influencerId);
      }),
      ...videosToArchive.map((video) =>
        updateFBVideo(video.id, { isArchived: true })
      ),
      ...videosToUnarchive.map((video) =>
        updateFBVideo(video.id, { isArchived: false })
      ),
    ]);

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    return { code: "FAILED", message: error.message };
  }
};

const createFacebookItems = async ({ identity, arguments }) => {
  try {
    const { input, sectionId, subSectionId } = arguments;
    const { videos } = input;

    const influencerId = `${identity.sub}::${identity.username}`;

    const facebookRepository = await getInfluencersFBRepository(influencerId);

    const { videosToUnarchive, videosToStore, videoToIgnore } =
      checkFBRepositoryVideos(videos, facebookRepository);

    const fbCollection = await Promise.all([
      ...videosToStore.map(async (video) => {
        video.thumbnailUrl = await storeThumnailToS3(
          video.thumbnailUrl,
          `public/fb/thumbnail/${video.videoId}-${new Date().valueOf()}`
        );

        video.sourceMediaUrl = await storeVideoToS3(
          video.sourceMediaUrl,
          `public/fb/video/${video.videoId}-${new Date().valueOf()}`
        );

        return addFBVideo(video, influencerId);
      }),

      ...videosToUnarchive.map((video) =>
        updateFBVideo(video.id, { isArchived: false })
      ),
      ...videoToIgnore,
    ]);

    if (sectionId) {
      if (subSectionId) {
        const subSectionFBItemsRepo = await getSubSectionFBItems(subSectionId);
        await Promise.all([
          ...fbCollection.map(async (collection) => {
            const subSecctionFBItem = subSectionFBItemsRepo.find(
              (s) => s.facebookVideoId === collection.id
            );
            if (!subSecctionFBItem) {
              await createSubSectionFBItems({
                subSectionId,
                facebookVideoId: collection.id,
                influencerId,
              });
            }
          }),
          ...subSectionFBItemsRepo.map(async (item) => {
            const subSecctionFBItem = fbCollection.find(
              (s) => s.id === item.facebookVideoId
            );
            if (!subSecctionFBItem) {
              await deleteSubSectionFBItems(item.id);
            }
          }),
        ]);
      } else {
        const subSection = await createFBSubSection(sectionId, influencerId);
        await Promise.all(
          fbCollection.map((item) =>
            createSubSectionFBItems({
              subSectionId: subSection.id,
              facebookVideoId: item.id,
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
  syncFacebookRepository,
  createFacebookItems,
};
