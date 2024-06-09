const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { getDynamoDBUpdateExpressions } = require("../helpers");
const { getMaxPositionSubSection } = require("./helper");

const db = new AWS.DynamoDB.DocumentClient();

const CUSTOM_LINK_TABLE = process.env.API_MYWBACKEND_CUSTOMLINKTABLE_NAME;
const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;
const SUBSCETION_CUSTOM_LINK_ITEM_TABLE = `SubSectionCustomLinks-${process.env.API_MYWBACKEND_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const CUSTOM_LINK_BY_INFLUENCER_ID = "byInfluencerIdCustomLinks";
const SUBSECTION_CL_ITEMS_BY_SUB_SECTION_ID = "bySubSection";

const createSubSectionCLItems = async ({
  subSectionId,
  customLinkId,
  influencerId,
}) => {
  const data = {
    id: uuidv4(),
    influencerId,
    subSectionId,
    customLinkId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "SubSectionCLItems",
  };
  await db
    .put({
      TableName: SUBSCETION_CUSTOM_LINK_ITEM_TABLE,
      Item: data,
    })
    .promise();
  return data;
};

const getSubSectionCLItems = async (subSectionId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: SUBSCETION_CUSTOM_LINK_ITEM_TABLE,
      IndexName: SUBSECTION_CL_ITEMS_BY_SUB_SECTION_ID,
      KeyConditionExpression: "#subSectionId = :subSectionId",
      ExpressionAttributeNames: {
        "#subSectionId": "subSectionId",
      },
      ExpressionAttributeValues: {
        ":subSectionId": subSectionId,
      },
      ProjectionExpression: "id, subSectionId, customLinkId",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const payload = await getSubSectionCLItems(subSectionId, LastEvaluatedKey);

    return [...Items, ...payload];
  }

  return Items;
};

const deleteSubSectionCLItems = async (id) => {
  return await db
    .delete({
      TableName: SUBSCETION_CUSTOM_LINK_ITEM_TABLE,
      Key: { id },
    })
    .promise();
};

const createCustomLinkSubSection = async (
  sectionId,
  influencerId,
  title
) => {
  const count = await getMaxPositionSubSection(sectionId);
  const payload = {
    id: uuidv4(),
    sectionId,
    influencerId,
    position: count,
    type: "CUSTOMLINK",
    enabled: true,
    title,
    __typename: "SubSection",
  };

  await db.put({ TableName: SUBSECTION_TABLE, Item: payload }).promise();
  return payload;
};

const addCustomLink = async (customDataToStore, influencerId) => {
  const data = {
    ...customDataToStore,
    id: uuidv4(),
    influencerId,
    isArchived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "CustomLink",
  };

  await db.put({ TableName: CUSTOM_LINK_TABLE, Item: data }).promise();
  return data;
};

const updateCustomLink = (id, payload) =>
  db
    .update({
      TableName: CUSTOM_LINK_TABLE,
      Key: { id },
      ...getDynamoDBUpdateExpressions(payload),
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes);

const getInfluencersCustomLinkRepository = async (influencerId, nextToken) => {
  const { Items, LastEvaluatedKey } = await db
    .query({
      TableName: CUSTOM_LINK_TABLE,
      IndexName: CUSTOM_LINK_BY_INFLUENCER_ID,
      KeyConditionExpression: "#influencerId = :influencerId",
      ExpressionAttributeNames: {
        "#influencerId": "influencerId",
      },
      ExpressionAttributeValues: {
        ":influencerId": influencerId,
      },
      ProjectionExpression: "id, link , isArchived, description, title, image",
      ExclusiveStartKey: nextToken,
    })
    .promise();

  if (LastEvaluatedKey) {
    const customLinkData = await getInfluencersCustomLinkRepository(
      Items,
      LastEvaluatedKey
    );
    return [...Items, ...customLinkData];
  }

  return Items;
};

module.exports = {
  addCustomLink,
  createCustomLinkSubSection,
  createSubSectionCLItems,
  deleteSubSectionCLItems,
  getSubSectionCLItems,
  getInfluencersCustomLinkRepository,
  updateCustomLink,
};
