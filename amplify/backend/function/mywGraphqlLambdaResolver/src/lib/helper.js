const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

const SUBSECTION_TABLE = process.env.API_MYWBACKEND_SUBSECTIONTABLE_NAME;

const getAllSubSectionsBySection = async (sectionId) => {
  const params = {
    TableName: SUBSECTION_TABLE,
    IndexName: "bySectionIdSubSections",
    KeyConditionExpression: "sectionId = :sectionId",
    ExpressionAttributeValues: {
      ":sectionId": sectionId,
    },
  };

  let allSubSections = [];
  let lastEvaluatedKey = null;

  do {
    if (lastEvaluatedKey) {
      params.ExclusiveStartKey = lastEvaluatedKey;
    }

    try {
      const result = await db.query(params).promise();
      allSubSections = allSubSections.concat(result.Items);
      lastEvaluatedKey = result.LastEvaluatedKey;
    } catch (error) {
      throw error;
    }
  } while (lastEvaluatedKey);

  return allSubSections;
};

const getMaxPositionSubSection = async (sectionId) => {
  const subsections = await getAllSubSectionsBySection(sectionId);

  if (subsections.length === 0) {
    return 0; // No subsections found
  }

  // Find the subsection with the maximum position
  const maxPositionSubSection = subsections.reduce(
    (maxSubSection, subSection) => {
      return subSection.position > maxSubSection.position
        ? subSection
        : maxSubSection;
    },
    subsections[0]
  );

  return maxPositionSubSection.position + 1;
};

module.exports = {
  getMaxPositionSubSection,
};
