const {
  addCustomLink,
  createCustomLinkSubSection,
  createSubSectionCLItems,
} = require("../lib/customLink");

const createCustomLinkItems = async ({ identity, arguments }) => {
  try {
    const { sectionId, subSectionId, input } = arguments;
    const { links } = input;

    const influencerId = `${identity.sub}::${identity.username}`;

    const customDataCollection = await Promise.all([
      ...links.map(async (item) => addCustomLink(item, influencerId)),
    ]);

    const demo = await Promise.all([
      ...links.map(async (item) => item.linkType),
    ]);

    const subSectionTitleDecider = demo[0] || "";
    let subSectionTitle = "";
    switch (subSectionTitleDecider) {
      case "APP":
        subSectionTitle = "App Links";
        break;
      case "YTLINK":
        subSectionTitle = "Youtube Links";
        break;
      case "IGLINK":
        subSectionTitle = "Instagram Links";
        break;
      case "CUSTOM":
        subSectionTitle = "Portfolio";
        break;
      case "AMAZON":
      case "FLIPKART":
      case "EXTERNAL":
        subSectionTitle = "Shopping Links";
        break;
      default:
        subSectionTitle = "Custom Links";
        break;
    }

    if (sectionId) {
      if (subSectionId) {
        await Promise.all(
          customDataCollection.map(async (collection) =>
            createSubSectionCLItems({
              subSectionId,
              customLinkId: collection.id,
              influencerId,
            })
          )
        );
      } else {
        const subSection = await createCustomLinkSubSection(
          sectionId,
          influencerId,
          subSectionTitle
        );
        await Promise.all(
          customDataCollection.map((item) =>
            createSubSectionCLItems({
              subSectionId: subSection.id,
              customLinkId: item.id,
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

module.exports = { createCustomLinkItems };
