const AWS = require("aws-sdk");

const axios = require("axios");

const db = new AWS.DynamoDB.DocumentClient();

const INFLUENCER_TABLE = process.env.API_MYWBACKEND_INFLUENCERTABLE_NAME;

const getYoutubeAccessToken = async (influencerId) => {
  const { Item } = await db
    .get({
      TableName: INFLUENCER_TABLE,
      Key: {
        id: influencerId,
      },
      ProjectionExpression: "id, googleToken",
    })
    .promise();

  return Item;
};

const updateProfileAnalytics = async (influencerId, payload) => {
  return await db
    .update({
      TableName: INFLUENCER_TABLE,
      Key: { id: influencerId },
      UpdateExpression: "SET #youtubeMetrics=  :value",
      ExpressionAttributeNames: {
        "#youtubeMetrics": "youtubeMetrics",
      },
      ExpressionAttributeValues: {
        ":value": payload,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();
};

const getInsights = async (accessToken) => {
  const endDate = new Date().toISOString().split("T")[0];

  const currentDate = new Date();
  const thirtyDaysAgo = new Date(currentDate);
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  const startDateOfLast30 = thirtyDaysAgo.toISOString().split("T")[0];

  thirtyDaysAgo.setDate(currentDate.getDate() - 30);
  const startDateOfLast60 = thirtyDaysAgo.toISOString().split("T")[0];

  thirtyDaysAgo.setDate(currentDate.getDate() - 30);
  const startDateOfLast90 = thirtyDaysAgo.toISOString().split("T")[0];

  const config = {
    method: "get",
    url: `https://youtubeanalytics.googleapis.com/v2/reports?endDate=${endDate}&ids=channel==MINE&startDate=${startDateOfLast30}&metrics=views,likes,comments`,
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const responseOfLast30 = await axios.request(config);

  const viewsOfLast30 = responseOfLast30.data.rows[0][0];
  const likesOfLast30 = responseOfLast30.data.rows[0][1];
  const commentsOfLast30 = responseOfLast30.data.rows[0][2];

  config.url = `https://youtubeanalytics.googleapis.com/v2/reports?endDate=${endDate}&ids=channel==MINE&startDate=${startDateOfLast60}&metrics=views,likes,comments`;

  const responseOfLast60 = await axios.request(config);

  const viewsOfLast60 = responseOfLast60.data.rows[0][0];
  const likesOfLast60 = responseOfLast60.data.rows[0][1];
  const commentsOfLast60 = responseOfLast60.data.rows[0][2];

  config.url = `https://youtubeanalytics.googleapis.com/v2/reports?endDate=${endDate}&ids=channel==MINE&startDate=${startDateOfLast90}&metrics=views,likes,comments`;

  const responseOfLast90 = await axios.request(config);

  const viewsOfLast90 = responseOfLast90.data.rows[0][0];
  const likesOfLast90 = responseOfLast90.data.rows[0][1];
  const commentsOfLast90 = responseOfLast90.data.rows[0][2];

  return Promise.resolve({
    last30DaysImpression: viewsOfLast30,
    last30DaysLikes: likesOfLast30,
    last30DaysComments: commentsOfLast30,
    last60DaysImpression: viewsOfLast60,
    last60DaysLikes: likesOfLast60,
    last60DaysComments: commentsOfLast60,
    last90DaysImpression: viewsOfLast90,
    last90DaysLikes: likesOfLast90,
    last90DaysComments: commentsOfLast90,
  });
};

const getCityInsights = async (accessToken) => {
  const endDate = new Date().toISOString().split("T")[0];
  const config = {
    method: "get",
    url: `https://youtubeanalytics.googleapis.com/v2/reports?dimensions=city&endDate=${endDate}&ids=channel==MINE&maxResults=250&metrics=views&sort=-views&startDate=2017-01-01`,
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const response = await axios.request(config);

  const top3Cities = [];
  for (let i = 0; i < response.data.rows.length; i++) {
    if (i < 3) {
      top3Cities.push(response.data.rows[i][0]);
    } else {
      break;
    }
  }

  return Promise.resolve(top3Cities);
};

const getAgeGroupAndGenderInsights = async (accessToken) => {
  const endDate = new Date().toISOString().split("T")[0];
  const config = {
    method: "get",
    url: `https://youtubeanalytics.googleapis.com/v2/reports?dimensions=ageGroup,gender&endDate=${endDate}&filters=country==IN&ids=channel==MINE&metrics=viewerPercentage&sort=gender%2CageGroup&startDate=2017-01-01`,
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const response = await axios.request(config);

  const rows = response.data.rows;

  const desiredAgeGroupRatio = [];
  const ageGroupMap = new Map();
  let totalPercentage = 0;

  rows.forEach((row) => {
    const [ageGroup, gender, percentage] = row;
    if (!ageGroupMap.has(ageGroup)) {
      ageGroupMap.set(ageGroup, 0);
    }
    ageGroupMap.set(ageGroup, ageGroupMap.get(ageGroup) + percentage);
    totalPercentage += percentage;
  });

  for (const [ageGroup, percentage] of ageGroupMap) {
    const percentageFormatted = ((percentage / totalPercentage) * 100).toFixed(
      2
    );
    desiredAgeGroupRatio.push({
      ageGroup: ageGroup.replace("age", ""),
      percentage: percentageFormatted,
    });
  }

  let femaleCount = 0;
  let maleCount = 0;

  rows.forEach((row) => {
    const [ageGroup, gender, viewerPercentage] = row;
    if (gender === "female" || gender === "male") {
      // Since the data includes both male and female rows, we need to consider only those rows.
      if (gender === "female") {
        femaleCount += viewerPercentage;
      } else {
        maleCount += viewerPercentage;
      }
    }
  });

  return Promise.resolve({
    ageGroupRatio: desiredAgeGroupRatio,
    femaleCount,
    maleCount,
  });
};

module.exports = {
  getYoutubeAccessToken,
  updateProfileAnalytics,
  getInsights,
  getCityInsights,
  getAgeGroupAndGenderInsights,
};
