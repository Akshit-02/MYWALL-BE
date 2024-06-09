const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

const SECTION_TABLE = process.env.API_MYWBACKEND_SECTIONTABLE_NAME;

const updateSectionPosition = async (id, position, isArchived) =>
  await db
    .update({
      TableName: SECTION_TABLE,
      Key: { id },
      UpdateExpression: "SET #position = :position, #isArchived = :isArchived",
      ExpressionAttributeNames: {
        "#position": "position",
        "#isArchived": "isArchived",
      },
      ExpressionAttributeValues: {
        ":position": position,
        ":isArchived": isArchived,
      },
      ConditionExpression: "attribute_exists(id)",
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes);

module.exports = {
  updateSectionPosition,
};
