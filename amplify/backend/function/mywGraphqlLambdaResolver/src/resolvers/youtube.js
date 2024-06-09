const {
  getInfluencersYTRepository,
  addNewYTVideo,
  updateYTVideo,
  createYTSubSection,
  createSubSectionYTItems,
  deleteSubSectionYTItems,
  getSubSectionYTItems,
} = require("../lib/youtube");
const { getYTReposirotyVideoStatus } = require("../helpers/youtube");
const { storeThumnailToS3 } = require("../lib/index");

const syncYoutubeRepository = async ({ identity, arguments }) => {
  try {
    const { videos } = arguments.input;
    const influencerId = `${identity.sub}::${identity.username}`;

    const repositoryVideos = await getInfluencersYTRepository(influencerId);

    const { archivedVideos, unarchivedVideos, newVideos } =
      getYTReposirotyVideoStatus(videos, repositoryVideos);

    const ytCollection = await Promise.all([
      ...newVideos.map(async (video) => {
        video.thumbnailUrl = await storeThumnailToS3(
          video.thumbnailUrl,
          `public/yt/thumbnail/${video.videoId}-${new Date().valueOf()}`
        );

        return addNewYTVideo(video, influencerId);
      }),

      ...unarchivedVideos.map((video) =>
        updateYTVideo(video.id, { isArchived: false })
      ),
      ...archivedVideos.map((video) =>
        updateYTVideo(video.id, { isArchived: true })
      ),
    ]);

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    console.log(error);
    return { code: "FAILED", message: error.message };
  }
};

const createYoutubeItems = async ({ identity, arguments }) => {
  try {
    const { input, sectionId, subSectionId } = arguments;
    const { videos } = input;

    const influencerId = `${identity.sub}::${identity.username}`;

    const repositoryVideos = await getInfluencersYTRepository(influencerId);

    const { unarchivedVideos, newVideos, videoToIgnore } =
      getYTReposirotyVideoStatus(videos, repositoryVideos);

    const ytCollection = await Promise.all([
      ...newVideos.map(async (video) => {
        video.thumbnailUrl = await storeThumnailToS3(
          video.thumbnailUrl,
          `public/yt/thumbnail/${video.videoId}-${new Date().valueOf()}`
        );
        return addNewYTVideo(video, influencerId);
      }),
      ...unarchivedVideos.map((video) =>
        updateYTVideo(video.id, { isArchived: false })
      ),
      ...videoToIgnore,
    ]);

    if (sectionId) {
      if (subSectionId) {
        const subSectionYTItemsRepo = await getSubSectionYTItems(subSectionId);
        await Promise.all([
          ...ytCollection.map(async (collection) => {
            const subSecctionYTItem = subSectionYTItemsRepo.find(
              (s) => s.youtubeVideoId === collection.id
            );
            if (!subSecctionYTItem) {
              await createSubSectionYTItems({
                subSectionId,
                youtubeVideoId: collection.id,
                influencerId,
              });
            }
          }),
          ...subSectionYTItemsRepo.map(async (item) => {
            const subSecctionYTItem = ytCollection.find(
              (s) => s.id === item.youtubeVideoId
            );
            if (!subSecctionYTItem) {
              await deleteSubSectionYTItems(item.id);
            }
          }),
        ]);
      } else {
        const subSection = await createYTSubSection(sectionId, influencerId);
        await Promise.all(
          ytCollection.map((item) =>
            createSubSectionYTItems({
              subSectionId: subSection.id,
              youtubeVideoId: item.id,
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

module.exports = { syncYoutubeRepository, createYoutubeItems };
