const { sortSections } = require("../helpers/section");
const { updateSectionPosition } = require("../lib/section");

const sortSectionByPosition = async ({ arguments }) => {
  try {
    const { sectionIds } = arguments.input;
    const sortedSections = sortSections(sectionIds);

    await Promise.all(
      sortedSections.map((section) =>
        updateSectionPosition(section.id, section.position, section.isArchived)
      )
    );

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    console.log("error while sorting sections: ", error);
    return { code: "FAILED", message: error.message };
  }
};

module.exports = {
  sortSectionByPosition,
};
