const {
  createSubSectionLogoItems,
  createLogoSubSection,
  addNewLogoItem,
} = require("../lib/logo");

const createLogoItems = async ({ identity, arguments }) => {
  try {
    const { input, sectionId, subSectionId } = arguments;
    const { logoItems } = input;

    const influencerId = `${identity.sub}::${identity.username}`;

    const logoCollection = await Promise.all([
      ...logoItems.map((logo) => addNewLogoItem(logo, influencerId)),
    ]);

    if (sectionId) {
      if (subSectionId) {
        await Promise.all(
          logoCollection.map((item) =>
            createSubSectionLogoItems({
              subSectionId,
              logoId: item.id,
              position: item.position,
              influencerId,
            })
          )
        );
      } else {
        const subSection = await createLogoSubSection(sectionId, influencerId);
        await Promise.all(
          logoCollection.map((item) =>
            createSubSectionLogoItems({
              subSectionId: subSection.id,
              logoId: item.id,
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

module.exports = { createLogoItems };
