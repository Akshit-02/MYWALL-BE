const getYTReposirotyVideoStatus = (videos, ytRepository) => {
  const videoIds = videos.map((v) => v.videoId);

  const archivedVideos = ytRepository.filter(
    (v) => !videoIds.includes(v.videoId) && !v.isArchived
  );

  const unarchivedVideos = ytRepository.filter(
    (v) => videoIds.includes(v.videoId) && v.isArchived
  );

  const videoToIgnore = ytRepository.filter(
    (v) => videoIds.includes(v.videoId) && !v.isArchived
  );

  const ytVideos = ytRepository.map((v) => v.videoId);
  const newVideos = videos.filter((v) => !ytVideos.includes(v.videoId));

  return {
    archivedVideos,
    unarchivedVideos,
    newVideos,
    videoToIgnore,
  };
};

module.exports = { getYTReposirotyVideoStatus };
