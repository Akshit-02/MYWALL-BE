const axios = require("axios");

const getDynamoDBUpdateExpressions = (payload) => {
  return Object.entries(payload).reduce(
    (acc, [key, value]) => {
      if (!acc.UpdateExpression) {
        acc.UpdateExpression = `SET #${key} = :${key}`;
      } else {
        acc.UpdateExpression = `${acc.UpdateExpression}, #${key} = :${key}`;
      }
      acc.ExpressionAttributeNames = {
        ...acc.ExpressionAttributeNames,
        [`#${key}`]: key,
      };
      acc.ExpressionAttributeValues = {
        ...acc.ExpressionAttributeValues,
        [`:${key}`]: value,
      };
      return acc;
    },
    {
      UpdateExpression: "",
      ExpressionAttributeNames: {},
      ExpressionAttributeValues: {},
    }
  );
};

const convertURLtoBase64 = async (url) => {
  const { data, headers } = await axios(url, {
    responseType: "arraybuffer",
  });

  return { buffer: data, contentType: headers["content-type"] };
};

module.exports = { getDynamoDBUpdateExpressions, convertURLtoBase64 };
