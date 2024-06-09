const getCLReposirotyStatus = (customCollection, customLinkRepository) => {
  const customLinks = customCollection.map((c) => c.link);

  const customDataToUnarchive = customLinkRepository.filter(
    (c) => customLinks.includes(c.link) && c.isArchived
  );

  const customDataToIgnore = customLinkRepository.filter(
    (c) => customLinks.includes(c.link) && !c.isArchived
  );

  const customLinksToCompare = customLinkRepository.map((c) => c.link);
  const newCustomData = customCollection.filter(
    (c) => !customLinksToCompare.includes(c.link)
  );

  return {
    customDataToUnarchive,
    newCustomData,
    customDataToIgnore,
  };
};

module.exports = {
  getCLReposirotyStatus,
};
