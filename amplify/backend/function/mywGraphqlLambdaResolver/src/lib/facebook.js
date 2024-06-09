const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const { getDynamoDBUpdateExpressions } = require("../helpers");
const { getMaxPositionSubSection } = require("./helper");

const db = new AWS.DynamoDB.DocumentClient();

const FACEBOOK_TABLE = process.env.API_MYWBACKEND_FACEBOOKVIDEOTABLE_NAME;
const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;
const SUBSCETION_FB_ITEM_TABLE = `SubSectionFBItems-${process.env.API_MYWBACKEND_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const FACEBOOK_VIDEO_BY_INFLUENCER_ID = "byInfluencerIdFacebookVideos";
const SUBSECTION_FB_ITEMS_BY_SUB_SECTION_ID = "bySubSection";

const createSubSectionFBItems = async ({
  subSectionId,
  facebookVideoId,
  influencerId,
}) => {
  return await db
    .put({
      TableName: SUBSCETION_FB_ITEM_TABLE,
      Item: {
        id: uuidv4(),
        influencerId,
        subSectionId,
        facebookVideoId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: "SubSectionFBItems",
      },
    })
    .promise();
};

const getSubSectionFBItems = async (subSectionId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: SUBSCETION_FB_ITEM_TABLE,
      IndexName: SUBSECTION_FB_ITEMS_BY_SUB_SECTION_ID,
      KeyConditionExpression: "#subSectionId = :subSectionId",
      ExpressionAttributeNames: {
        "#subSectionId": "subSectionId",
      },
      ExpressionAttributeValues: {
        ":subSectionId": subSectionId,
      },
      ProjectionExpression: "id, subSectionId, facebookVideoId",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const payload = await getSubSectionFBItems(subSectionId, LastEvaluatedKey);

    return [...Items, ...payload];
  }

  return Items;
};

const deleteSubSectionFBItems = async (id) => {
  return await db
    .delete({
      TableName: SUBSCETION_FB_ITEM_TABLE,
      Key: { id },
    })
    .promise();
};

const createFBSubSection = async (sectionId, influencerId) => {
  const count = await getMaxPositionSubSection(sectionId);

  const payload = {
    id: uuidv4(),
    sectionId,
    influencerId,
    position: count,
    type: "FACEBOOK",
    enabled: true,
    title: "Facebook Reels",
    __typename: "SubSection",
  };

  await db.put({ TableName: SUBSECTION_TABLE, Item: payload }).promise();
  return payload;
};

const addFBVideo = async (video, influencerId) => {
  const data = {
    ...video,
    id: uuidv4(),
    influencerId,
    isArchived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "FacebookVideo",
  };

  await db
    .put({
      TableName: FACEBOOK_TABLE,
      Item: data,
    })
    .promise();

  return data;
};

const updateFBVideo = (id, payload) => {
  return db
    .update({
      TableName: FACEBOOK_TABLE,
      Key: { id },
      ...getDynamoDBUpdateExpressions(payload),
      ReturnValues: "ALL_NEW",
    })
    .promise();
};

const getInfluencersFBRepository = async (influencerId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: FACEBOOK_TABLE,
      IndexName: FACEBOOK_VIDEO_BY_INFLUENCER_ID,
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
    const videos = await getInfluencersFBRepository(Items, LastEvaluatedKey);
    return [...Items, ...videos];
  }

  return Items;
};

module.exports = {
  addFBVideo,
  updateFBVideo,
  getInfluencersFBRepository,
  createSubSectionFBItems,
  getSubSectionFBItems,
  deleteSubSectionFBItems,
  createFBSubSection,
};
