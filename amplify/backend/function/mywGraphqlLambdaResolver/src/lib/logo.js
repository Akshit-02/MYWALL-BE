const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { getMaxPositionSubSection } = require("./helper");

const db = new AWS.DynamoDB.DocumentClient();

const LOGO_TABLE = process.env.API_MYWBACKEND_LOGOTABLE_NAME;
const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;
const SUBSCETION_LOGO_ITEM_TABLE = `SubSectionLogoItems-${process.env.API_MYWBACKEND_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const createSubSectionLogoItems = async ({
  subSectionId,
  logoId,
  position,
  influencerId,
}) => {
  return await db
    .put({
      TableName: SUBSCETION_LOGO_ITEM_TABLE,
      Item: {
        id: uuidv4(),
        influencerId,
        subSectionId,
        logoId,
        position,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: "SubSectionLogoItems",
      },
    })
    .promise();
};

const createLogoSubSection = async (sectionId, influencerId) => {
  const count = await getMaxPositionSubSection(sectionId);

  const payload = {
    id: uuidv4(),
    sectionId,
    influencerId,
    position: count,
    type: "LOGO",
    enabled: true,
    title: "My Logo",
    __typename: "SubSection",
  };

  await db.put({ TableName: SUBSECTION_TABLE, Item: payload }).promise();
  return payload;
};

const addNewLogoItem = async (logo, influencerId) => {
  const data = {
    ...logo,
    id: uuidv4(),
    influencerId,
    isArchived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "Logo",
  };

  await db.put({ TableName: LOGO_TABLE, Item: data }).promise();
  return data;
};

module.exports = {
  createSubSectionLogoItems,
  createLogoSubSection,
  addNewLogoItem,
};
