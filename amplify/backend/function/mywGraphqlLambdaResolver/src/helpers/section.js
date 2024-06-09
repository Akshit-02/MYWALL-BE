const sortSections = (sections) =>
  sections.map((section, index) => ({
    id: section.id,
    position: index + 1,
    isArchived: section.isArchived,
  }));

module.exports = {
  sortSections,
};
