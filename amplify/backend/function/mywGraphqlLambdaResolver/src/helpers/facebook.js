const checkFBRepositoryVideos = (videos, facebookRepository) => {
  //get videoIds from videos payload
  const videoIds = videos.map((v) => v.videoId);

  const videosToArchive = facebookRepository.filter(
    (video) => !videoIds.includes(video.videoId) && !video.isArchived
  );

  const videosToUnarchive = facebookRepository.filter(
    (video) => videoIds.includes(video.videoId) && video.isArchived
  );

  const fbRepositoryVideoIDs = facebookRepository.map((video) => video.videoId);

  const videosToStore = videos.filter(
    (v) => !fbRepositoryVideoIDs.includes(v.videoId)
  );

  const videoToIgnore = facebookRepository.filter(
    (v) => videoIds.includes(v.videoId) && !v.isArchived
  );

  return { videosToArchive, videosToUnarchive, videosToStore, videoToIgnore };
};

module.exports = {
  checkFBRepositoryVideos,
};
