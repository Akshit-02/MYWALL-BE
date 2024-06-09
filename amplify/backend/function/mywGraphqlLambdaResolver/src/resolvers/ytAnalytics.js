const {
  getYoutubeAccessToken,
  updateProfileAnalytics,
  getInsights,
  getCityInsights,
  getAgeGroupAndGenderInsights,
} = require("../lib/ytAnalytics");

const syncYoutubeAnalytics = async ({ identity }) => {
  try {
    const influencerId = `${identity.sub}::${identity.username}`;

    const { googleToken } = await getYoutubeAccessToken(influencerId);

    if (!googleToken?.accessToken) {
      return {
        code: "FAILED",
        message: "Google's AccessToken doesn't exist",
      };
    }

    const ytInsights = await getInsights(googleToken?.accessToken);
    const ytCityInsights = await getCityInsights(googleToken?.accessToken);

    const { ageGroupRatio, femaleCount, maleCount } =
      await getAgeGroupAndGenderInsights(googleToken?.accessToken);
    const payload = {
      statistics: [
        {
          viewCount: ytInsights.last30DaysImpression,
          likeCount: ytInsights.last30DaysLikes,
          commentCount: ytInsights.last30DaysComments,
          dateLabel: "LAST30",
        },
        {
          viewCount: ytInsights.last60DaysImpression,
          likeCount: ytInsights.last60DaysLikes,
          commentCount: ytInsights.last60DaysComments,
          dateLabel: "LAST60",
        },
        {
          viewCount: ytInsights.last90DaysImpression,
          likeCount: ytInsights.last90DaysLikes,
          commentCount: ytInsights.last90DaysComments,
          dateLabel: "LAST90",
        },
      ],
      topAudienceCities: [...ytCityInsights],
      sexRatio: {
        female: femaleCount,
        male: maleCount,
      },
      ageGroupRatio: ageGroupRatio,
    };

    await updateProfileAnalytics(influencerId, payload);

    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    console.log(error);
    return { code: "FAILED", message: error.message };
  }
};

module.exports = {
  syncYoutubeAnalytics,
};
