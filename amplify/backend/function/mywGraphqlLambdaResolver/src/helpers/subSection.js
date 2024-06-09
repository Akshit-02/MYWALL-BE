const sortSubSections = (subSections) =>
  subSections.map((subSection, index) => ({
    id: subSection.id,
    position: index + 1,
    enabled: subSection.enabled,
  }));

module.exports = {
  sortSubSections,
};
