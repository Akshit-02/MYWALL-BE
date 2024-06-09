const { sortSubSections } = require("../helpers/subSection");
const { updateSubSectionPosition } = require("../lib/subSection");

const sortSubSectionByPosition = async ({ arguments }) => {
  try {
    const { subSectionIds } = arguments.input;
    const sortedSubSections = sortSubSections(subSectionIds);

    await Promise.all(
      sortedSubSections.map((subSection) =>
        updateSubSectionPosition(subSection.id, subSection.position, subSection.enabled)
      )
    );

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    console.log("error while sorting subSections: ", error.__type);
    console.log("error -----: ", error);
    return { code: "FAILED", message: error.message };
  }
};

module.exports = {
  sortSubSectionByPosition,
};
