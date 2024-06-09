const {
  createSubSectionMediaItems,
  createMediaSubSection,
  addNewMediaItem,
} = require("../lib/media");

const createMediaItems = async ({ identity, arguments }) => {
  try {
    const { input, sectionId, subSectionId } = arguments;
    const { mediaItems } = input;

    const influencerId = `${identity.sub}::${identity.username}`;

    const mediaCollection = await Promise.all([
      ...mediaItems.map((media) => addNewMediaItem(media, influencerId)),
    ]);

    if (sectionId) {
      if (subSectionId) {
        await Promise.all(
          mediaCollection.map((item) =>
            createSubSectionMediaItems({
              subSectionId,
              mediaId: item.id,
              position: item.position,
              influencerId,
            })
          )
        );
      } else {
        const subSection = await createMediaSubSection(sectionId, influencerId);
        await Promise.all(
          mediaCollection.map((item) =>
            createSubSectionMediaItems({
              subSectionId: subSection.id,
              mediaId: item.id,
              position: item.position,
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

module.exports = { createMediaItems };
