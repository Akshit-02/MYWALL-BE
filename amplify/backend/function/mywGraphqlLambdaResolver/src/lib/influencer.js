const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

const INFLUENCER_TABLE = process.env.API_MYWBACKEND_INFLUENCERTABLE_NAME;
const INFLUENCER_BY_SLUG_INDEX = "bySlugInfluencer";

const bySlugInfluencer = async (slug) => {
  return await db
    .query({
      TableName: INFLUENCER_TABLE,
      IndexName: INFLUENCER_BY_SLUG_INDEX,
      KeyConditionExpression: "#slug = :slug",
      ExpressionAttributeNames: {
        "#slug": "slug",
      },
      ExpressionAttributeValues: {
        ":slug": slug,
      },
      Limit: 1,
    })
    .promise()
    .then((response) => response.Items[0]);
};

module.exports = { bySlugInfluencer };
