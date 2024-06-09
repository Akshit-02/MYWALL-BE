const AWS = require("aws-sdk");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const { getDynamoDBUpdateExpressions } = require("../helpers");
const { getMaxPositionSubSection } = require("./helper");

const db = new AWS.DynamoDB.DocumentClient();

const YOUTUBE_TABLE = process.env.API_MYWBACKEND_YOUTUBEVIDEOTABLE_NAME;
const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;
const SUBSCETION_YT_ITEM_TABLE = `SubSectionYTItems-${process.env.API_MYWBACKEND_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const YOUTUBE_VIDEO_BY_INFLUENCER_INDEX = "byInfluencerIdYoutubeVideos";
const SUBSECTION_YT_ITEMS_BY_SUB_SECTION_ID = "bySubSection";

const API_KEY = process.env.YOUTUBE_API_KEY;

const createSubSectionYTItems = async ({
  subSectionId,
  youtubeVideoId,
  influencerId,
}) => {
  return await db
    .put({
      TableName: SUBSCETION_YT_ITEM_TABLE,
      Item: {
        id: uuidv4(),
        influencerId,
        subSectionId,
        youtubeVideoId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: "SubSectionYTItems",
      },
    })
    .promise();
};

const getSubSectionYTItems = async (subSectionId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: SUBSCETION_YT_ITEM_TABLE,
      IndexName: SUBSECTION_YT_ITEMS_BY_SUB_SECTION_ID,
      KeyConditionExpression: "#subSectionId = :subSectionId",
      ExpressionAttributeNames: {
        "#subSectionId": "subSectionId",
      },
      ExpressionAttributeValues: {
        ":subSectionId": subSectionId,
      },
      ProjectionExpression: "id, subSectionId, youtubeVideoId",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const payload = await getSubSectionYTItems(subSectionId, LastEvaluatedKey);

    return [...Items, ...payload];
  }

  return Items;
};

const deleteSubSectionYTItems = async (id) => {
  return await db
    .delete({
      TableName: SUBSCETION_YT_ITEM_TABLE,
      Key: { id },
    })
    .promise();
};

const createYTSubSection = async (sectionId, influencerId) => {
  const count = await getMaxPositionSubSection(sectionId);

  const payload = {
    id: uuidv4(),
    sectionId,
    influencerId,
    position: count,
    type: "YOUTUBE",
    enabled: true,
    title: "Youtube Videos",
    __typename: "SubSection",
  };

  await db.put({ TableName: SUBSECTION_TABLE, Item: payload }).promise();
  return payload;
};

const getInfluencersYTRepository = async (influencerId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: YOUTUBE_TABLE,
      IndexName: YOUTUBE_VIDEO_BY_INFLUENCER_INDEX,
      KeyConditionExpression: "#influencerId = :influencerId",
      ExpressionAttributeNames: {
        "#influencerId": "influencerId",
      },
      ExpressionAttributeValues: {
        ":influencerId": influencerId,
      },
      ProjectionExpression: "id, videoId, isArchived",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const videos = await getInfluencersYTRepository(
      influencerId,
      LastEvaluatedKey
    );

    return [...Items, ...videos];
  }

  return Items;
};

const addNewYTVideo = async (video, influencerId) => {
  const data = {
    ...video,
    id: uuidv4(),
    influencerId,
    isArchived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "YoutubeVideo",
  };

  await db.put({ TableName: YOUTUBE_TABLE, Item: data }).promise();
  return data;
};

const updateYTVideo = (id, payload) =>
  db
    .update({
      TableName: YOUTUBE_TABLE,
      Key: { id },
      ...getDynamoDBUpdateExpressions(payload),
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes);

const getYTVideos = async (videos) => {
  const videoIds = encodeURIComponent(videos.join(","));
  const parts = encodeURIComponent("snippet,statistics");
  const config = {
    method: "get",
    url: `https://youtube.googleapis.com/youtube/v3/videos?part=${parts}&id=${videoIds}&key=${API_KEY}`,
    headers: {},
  };

  const response = await axios.request(config);
  const { items } = response.data;

  return items.map((item) => ({
    videoId: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    type: "VIDEO",
    timestamp: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
    thumbnails: item.snippet.thumbnails,
    statistics: {
      viewCount: +item.statistics.viewCount,
      likeCount: +item.statistics.likeCount,
      favoriteCount: +item.statistics.favoriteCount,
      commentCount: +item.statistics.commentCount,
    },
  }));
};

module.exports = {
  getInfluencersYTRepository,
  getYTVideos,
  addNewYTVideo,
  updateYTVideo,
  createYTSubSection,
  createSubSectionYTItems,
  getSubSectionYTItems,
  deleteSubSectionYTItems,
};
