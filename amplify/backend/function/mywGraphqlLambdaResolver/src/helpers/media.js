const getMediaStatus = (mediaItems, mediaRepository) => {
  const mediaPaths = mediaItems.map((media) => media.mediaPath);
  const mediaToArchive = mediaRepository.filter(
    (media) => !mediaPaths.includes(media.mediaPath) && !media.isArchived
  );

  const mediaToUnarchive = mediaRepository.filter(
    (media) => mediaPaths.includes(media.mediaPath) && media.isArchived
  );

  const mediaToIgnore = mediaRepository.filter(
    (media) => mediaPaths.includes(media.mediaPath) && !media.isArchived
  );

  const mediaRepositoryPaths = mediaRepository.map((media) => media.mediaPath);
  const mediaToAdd = mediaItems.filter(
    (media) => !mediaRepositoryPaths.includes(media.mediaPath)
  );

  return {
    mediaToArchive,
    mediaToUnarchive,
    mediaToIgnore,
    mediaToAdd,
  };
};

module.exports = {
  getMediaStatus,
};
