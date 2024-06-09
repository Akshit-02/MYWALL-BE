const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const { getDynamoDBUpdateExpressions } = require("../helpers");
const { getMaxPositionSubSection } = require("./helper");

const db = new AWS.DynamoDB.DocumentClient();

const INSTAGRAM_TABLE = process.env.API_MYWBACKEND_INSTAGRAMVIDEOTABLE_NAME;
const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;
const SUBSCETION_IG_ITEM_TABLE = `SubSectionIGItems-${process.env.API_MYWBACKEND_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const INSTAGRAM_VIDEO_BY_INFLUENCER_ID = "byInfluencerIdInstagramVideos";
const SUBSECTION_IG_ITEMS_BY_SUB_SECTION_ID = "bySubSection";

const createSubSectionIGItems = async ({
  subSectionId,
  instagramVideoId,
  influencerId,
}) => {
  return await db
    .put({
      TableName: SUBSCETION_IG_ITEM_TABLE,
      Item: {
        id: uuidv4(),
        influencerId,
        subSectionId,
        instagramVideoId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: "SubSectionIGItems",
      },
    })
    .promise();
};

const getSubSectionIGItems = async (subSectionId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: SUBSCETION_IG_ITEM_TABLE,
      IndexName: SUBSECTION_IG_ITEMS_BY_SUB_SECTION_ID,
      KeyConditionExpression: "#subSectionId = :subSectionId",
      ExpressionAttributeNames: {
        "#subSectionId": "subSectionId",
      },
      ExpressionAttributeValues: {
        ":subSectionId": subSectionId,
      },
      ProjectionExpression: "id, subSectionId, instagramVideoId",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const payload = await getSubSectionIGItems(subSectionId, LastEvaluatedKey);

    return [...Items, ...payload];
  }

  return Items;
};

const deleteSubSectionIGItems = async (id) => {
  return await db
    .delete({
      TableName: SUBSCETION_IG_ITEM_TABLE,
      Key: { id },
    })
    .promise();
};

const createIGSubSection = async (sectionId, influencerId) => {
  const count = await getMaxPositionSubSection(sectionId);

  const payload = {
    id: uuidv4(),
    sectionId,
    influencerId,
    position: count,
    type: "INSTAGRAM",
    enabled: true,
    title: "Instagram Reels",
    __typename: "SubSection",
  };

  await db.put({ TableName: SUBSECTION_TABLE, Item: payload }).promise();
  return payload;
};

const addIGVideo = async (video, influencerId) => {
  const data = {
    ...video,
    id: uuidv4(),
    influencerId,
    isArchived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "InstagramVideo",
  };
  await db
    .put({
      TableName: INSTAGRAM_TABLE,
      Item: data,
    })
    .promise();
  return data;
};

const updateIGVideo = (id, payload) =>
  db
    .update({
      TableName: INSTAGRAM_TABLE,
      Key: { id },
      ...getDynamoDBUpdateExpressions(payload),
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes);

const getInfluencersIGRepository = async (influencerId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: INSTAGRAM_TABLE,
      IndexName: INSTAGRAM_VIDEO_BY_INFLUENCER_ID,
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
    const videos = await getInfluencersIGRepository(Items, LastEvaluatedKey);
    return [...Items, ...videos];
  }

  return Items;
};

module.exports = {
  addIGVideo,
  updateIGVideo,
  getInfluencersIGRepository,
  createSubSectionIGItems,
  getSubSectionIGItems,
  deleteSubSectionIGItems,
  createIGSubSection,
};
