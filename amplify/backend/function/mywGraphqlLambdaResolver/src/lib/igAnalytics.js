const AWS = require("aws-sdk");

const axios = require("axios");

const db = new AWS.DynamoDB.DocumentClient();

const INFLUENCER_TABLE = process.env.API_MYWBACKEND_INFLUENCERTABLE_NAME;

const getFacebookAccessTokenAndIGUserId = async (influencerId) => {
  const { Item } = await db
    .get({
      TableName: INFLUENCER_TABLE,
      Key: {
        id: influencerId,
      },
      ProjectionExpression: "id, igPageId, facebookToken",
    })
    .promise();

  return Item;
};

const updateProfileAnalytics = async (influencerId, payload) => {
  return await db
    .update({
      TableName: INFLUENCER_TABLE,
      Key: { id: influencerId },
      UpdateExpression: "SET #instagramMetrics =  :value",
      ExpressionAttributeNames: {
        "#instagramMetrics": "instagramMetrics",
      },
      ExpressionAttributeValues: {
        ":value": payload,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();
};

const getIGAccessToken = async (accessToken) => {
  const config = {
    method: "get",
    url: `https://graph.facebook.com/v17.0/me/accounts?fields=access_token,instagram_business_account&access_token=${accessToken}`,
    headers: {},
  };

  const response = await axios.request(config);
  const data = response.data.data;

  const filteredData = data.filter((item) => item.instagram_business_account);
  const promises = filteredData.map((item) => {
    return new Promise((resolve, reject) => {
      resolve({
        access_token: item.access_token,
        instagram_business_account: item.instagram_business_account.id,
      });
    });
  });

  const result = await Promise.all(promises);

  return Promise.resolve({
    igUserId: result[0]?.instagram_business_account,
    igAccessToken: result[0]?.access_token,
  });
};

const getInsightsRecursive = async (
  igUserId,
  accessToken,
  daysLeft,
  currentDate,
  opr
) => {
  const thirtyDaysAgo = new Date(currentDate);
  thirtyDaysAgo.setDate(currentDate.getDate() - daysLeft);

  const since = Math.floor(thirtyDaysAgo.getTime() / 1000);
  const until = Math.floor(currentDate.getTime() / 1000);

  const config = {
    method: "get",
    url: `https://graph.facebook.com/v17.0/${igUserId}/insights?since=${since}&until=${until}&metric=impressions,likes,comments&metric_type=total_value&period=day&access_token=${accessToken}`,
    headers: {},
  };

  const response = await axios.request(config);
  const insightsData = response.data.data;

  let last30DaysImpression = 0;
  let last30DaysLikes = 0;
  let last30DaysComments = 0;

  for (const item of insightsData) {
    const totalValue = item.total_value?.value || 0;
    if (item.name === "impressions") {
      last30DaysImpression += totalValue;
    } else if (item.name === "likes") {
      last30DaysLikes += totalValue;
    } else if (item.name === "comments") {
      last30DaysComments += totalValue;
    }
  }

  if (opr === 3) {
    return { last30DaysImpression, last30DaysLikes, last30DaysComments };
  }

  const previousInsights = await getInsightsRecursive(
    igUserId,
    accessToken,
    daysLeft,
    thirtyDaysAgo,
    ++opr
  );

  return Promise.resolve({
    last30DaysImpression,
    last30DaysLikes,
    last30DaysComments,
    last60DaysImpression:
      last30DaysImpression + previousInsights.last30DaysImpression,
    last60DaysLikes: last30DaysLikes + previousInsights.last30DaysLikes,
    last60DaysComments:
      last30DaysComments + previousInsights.last30DaysComments,
    last90DaysImpression:
      last30DaysImpression + previousInsights.last60DaysImpression,
    last90DaysLikes: last30DaysLikes + previousInsights.last60DaysLikes,
    last90DaysComments:
      last30DaysComments + previousInsights.last60DaysComments,
  });
};

const getDemographyInsights = async (igUserId, accessToken) => {
  const config = {
    method: "get",
    url: `https://graph.facebook.com/v17.0/${igUserId}/insights?metric=audience_city,audience_gender_age&period=lifetime&access_token=${accessToken}`,
    headers: {},
  };

  const response = await axios.request(config);
  const insightsData = response.data.data;

  if (!insightsData.length) {
    return Promise.resolve({ error: "Insights Not Avalilable" });
  }
  const cityCount = Object.entries(insightsData[0].values[0].value);
  const top3Cities = cityCount.sort((a, b) => b[1] - a[1]).splice(0, 3);

  const genderCount = Object.entries(insightsData[1].values[0].value);

  // Separate data into two arrays: females and males
  const females = genderCount.filter((item) => item[0].startsWith("F."));
  const males = genderCount.filter((item) => item[0].startsWith("M."));

  // Calculate the total count of females and males
  const femaleCount = females.reduce((sum, item) => sum + item[1], 0);
  const maleCount = males.reduce((sum, item) => sum + item[1], 0);

  const totalPeople = femaleCount + maleCount;

  const femalePercentage = (femaleCount / totalPeople) * 100;
  const malePercentage = (maleCount / totalPeople) * 100;

  // Merge male and female data based on age groups
  const mergedData = genderCount.reduce((acc, [ageGroup, count]) => {
    const groupKey = ageGroup.slice(2); // Remove the first character (F, M, or U)
    acc[groupKey] = (acc[groupKey] || 0) + count;
    return acc;
  }, {});

  // Calculate the total count for the merged age groups
  const totalCount = Object.values(mergedData).reduce(
    (sum, count) => sum + count,
    0
  );

  // Calculate the percentage for each age group
  const percentageData = Object.entries(mergedData).map(([ageGroup, count]) => {
    const percentage = ((count / totalCount) * 100).toFixed(2);
    return [ageGroup, percentage];
  });

  return Promise.resolve({
    percentageData,
    top3Cities,
    femalePercentage,
    malePercentage,
  });
};

module.exports = {
  getFacebookAccessTokenAndIGUserId,
  updateProfileAnalytics,
  getInsightsRecursive,
  getDemographyInsights,
  getIGAccessToken,
};
