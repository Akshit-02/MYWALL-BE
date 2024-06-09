const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;

const updateSubSectionPosition = async (id, position, enabled) =>
  await db
    .update({
      TableName: SUBSECTION_TABLE,
      Key: { id },
      UpdateExpression: "SET #position = :position, #enabled = :enabled",
      ExpressionAttributeNames: {
        "#position": "position",
        "#enabled": "enabled",
      },
      ExpressionAttributeValues: {
        ":position": position,
        ":enabled": enabled,
      },
      ConditionExpression: "attribute_exists(id)",
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes);

module.exports = {
  updateSubSectionPosition,
};
