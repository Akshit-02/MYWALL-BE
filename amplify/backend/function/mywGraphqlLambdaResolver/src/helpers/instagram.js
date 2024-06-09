const checkIGRepositoryVideos = (videos, instagramRepository) => {
  //get videoIds from videos payload
  const videoIds = videos.map((v) => v.videoId);

  const videosToArchive = instagramRepository.filter(
    (video) => !videoIds.includes(video.videoId) && !video.isArchived
  );

  const videosToUnarchive = instagramRepository.filter(
    (video) => videoIds.includes(video.videoId) && video.isArchived
  );

  const IGRepositoryVideoIDs = instagramRepository.map(
    (video) => video.videoId
  );

  const videosToStore = videos.filter(
    (v) => !IGRepositoryVideoIDs.includes(v.videoId)
  );

  const videoToIgnore = instagramRepository.filter(
    (v) => videoIds.includes(v.videoId) && !v.isArchived
  );

  return { videosToArchive, videosToUnarchive, videosToStore, videoToIgnore };
};

module.exports = {
  checkIGRepositoryVideos,
};
