const AWS = require("aws-sdk");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const { getDynamoDBUpdateExpressions } = require("../helpers");
const { getMaxPositionSubSection } = require("./helper");

const db = new AWS.DynamoDB.DocumentClient();

const MEDIA_TABLE = process.env.API_MYWBACKEND_MEDIATABLE_NAME;
const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;
const SUBSCETION_MEDIA_ITEM_TABLE = `SubSectionMediaItems-${process.env.API_MYWBACKEND_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const MEDIA_BY_INFLUENCER_INDEX = "byInfluencerIdMedias";
const SUBSECTION_MEDIA_ITEMS_BY_SUB_SECTION_ID = "bySubSection";

const createSubSectionMediaItems = async ({
  subSectionId,
  mediaId,
  position,
  influencerId,
}) => {
  return await db
    .put({
      TableName: SUBSCETION_MEDIA_ITEM_TABLE,
      Item: {
        id: uuidv4(),
        influencerId,
        subSectionId,
        mediaId,
        position,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: "SubSectionMediaItems",
      },
    })
    .promise();
};

const getSubSectionMediaItems = async (subSectionId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: SUBSCETION_MEDIA_ITEM_TABLE,
      IndexName: SUBSECTION_MEDIA_ITEMS_BY_SUB_SECTION_ID,
      KeyConditionExpression: "#subSectionId = :subSectionId",
      ExpressionAttributeNames: {
        "#subSectionId": "subSectionId",
      },
      ExpressionAttributeValues: {
        ":subSectionId": subSectionId,
      },
      ProjectionExpression: "id, subSectionId, mediaId",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const payload = await getSubSectionMediaItems(
      subSectionId,
      LastEvaluatedKey
    );

    return [...Items, ...payload];
  }

  return Items;
};

const deleteSubSectionMediaItems = async (id) => {
  return await db
    .delete({
      TableName: SUBSCETION_MEDIA_ITEM_TABLE,
      Key: { id },
    })
    .promise();
};

const createMediaSubSection = async (sectionId, influencerId) => {
  const count = await getMaxPositionSubSection(sectionId);

  const payload = {
    id: uuidv4(),
    sectionId,
    influencerId,
    position: count,
    type: "MEDIA",
    enabled: true,
    title: "My Media",
    __typename: "SubSection",
  };

  await db.put({ TableName: SUBSECTION_TABLE, Item: payload }).promise();
  return payload;
};

const getInfluencersMediaRepository = async (influencerId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: MEDIA_TABLE,
      IndexName: MEDIA_BY_INFLUENCER_INDEX,
      KeyConditionExpression: "#influencerId = :influencerId",
      ExpressionAttributeNames: {
        "#influencerId": "influencerId",
      },
      ExpressionAttributeValues: {
        ":influencerId": influencerId,
      },
      ProjectionExpression: "id, mediaPath, isArchived",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const mediaItems = await getInfluencersMediaRepository(
      influencerId,
      LastEvaluatedKey
    );

    return [...Items, ...mediaItems];
  }

  return Items;
};

const addNewMediaItem = async (media, influencerId) => {
  const data = {
    ...media,
    id: uuidv4(),
    influencerId,
    isArchived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "Media",
  };

  await db.put({ TableName: MEDIA_TABLE, Item: data }).promise();
  return data;
};

const updateMediaItem = (id, payload) =>
  db
    .update({
      TableName: MEDIA_TABLE,
      Key: { id },
      ...getDynamoDBUpdateExpressions(payload),
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes);

module.exports = {
  createSubSectionMediaItems,
  getSubSectionMediaItems,
  deleteSubSectionMediaItems,
  createMediaSubSection,
  getInfluencersMediaRepository,
  addNewMediaItem,
  updateMediaItem,
};
