const {
  getFacebookAccessTokenAndIGUserId,
  updateProfileAnalytics,
  getInsightsRecursive,
  getDemographyInsights,
  getIGAccessToken,
} = require("../lib/igAnalytics");

const {
  structurizePercentageData,
  structurizeTopAudienceCities,
} = require("../helpers/igAnalytics");

const syncInstagramAnalytics = async ({ identity }) => {
  try {
    const influencerId = `${identity.sub}::${identity.username}`;

    const { facebookToken } = await getFacebookAccessTokenAndIGUserId(
      influencerId
    );

    if (!facebookToken?.accessToken) {
      return {
        code: "FAILED",
        message: "Facebook's AccessToken doesn't exist",
      };
    }

    const { igUserId, igAccessToken } = await getIGAccessToken(
      facebookToken?.accessToken
    );

    if (!igAccessToken) {
      return {
        code: "FAILED",
        message: "No Instagram Account Connected to Facebook Page",
      };
    }

    const igInsights = await getInsightsRecursive(
      igUserId,
      igAccessToken,
      30,
      new Date(),
      1
    );

    const {
      percentageData,
      top3Cities,
      femalePercentage,
      malePercentage,
      error,
    } = await getDemographyInsights(igUserId, igAccessToken);

    if (error) {
      return { code: "FAILED", message: error };
    }

    const structurizedPercentageData =
      structurizePercentageData(percentageData);
    const structurizedTopAudienceCities =
      structurizeTopAudienceCities(top3Cities);

    const payload = {
      statistics: [
        {
          viewCount: igInsights.last30DaysImpression,
          likeCount: igInsights.last30DaysLikes,
          commentCount: igInsights.last30DaysComments,
          dateLabel: "LAST30",
        },
        {
          viewCount: igInsights.last60DaysImpression,
          likeCount: igInsights.last60DaysLikes,
          commentCount: igInsights.last60DaysComments,
          dateLabel: "LAST60",
        },
        {
          viewCount: igInsights.last90DaysImpression,
          likeCount: igInsights.last90DaysLikes,
          commentCount: igInsights.last90DaysComments,
          dateLabel: "LAST90",
        },
      ],
      topAudienceCities: structurizedTopAudienceCities,
      sexRatio: {
        female: femalePercentage,
        male: malePercentage,
      },
      ageGroupRatio: [...structurizedPercentageData],
    };

    await updateProfileAnalytics(influencerId, payload);
    return { code: "SUCCESS", message: "SUCCESS", payload };
  } catch (error) {
    console.log(error);
    return { code: "FAILED", message: error.message };
  }
};

module.exports = {
  syncInstagramAnalytics,
};
