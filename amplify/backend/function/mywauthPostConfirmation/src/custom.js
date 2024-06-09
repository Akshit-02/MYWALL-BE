/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
// const {
//   CognitoIdentityProviderClient,
//   AdminAddUserToGroupCommand,
//   GetGroupCommand,
//   CreateGroupCommand,
// } = require("@aws-sdk/client-cognito-identity-provider");

const db = new AWS.DynamoDB.DocumentClient();
// const cognitoIdentityServiceProvider = new CognitoIdentityProviderClient({});

const INFLUENCER_TABLE = process.env.API_MYWBACKEND_INFLUENCERTABLE_NAME;
const SECTION_TABLE = process.env.API_MYWBACKEND_SECTIONTABLE_NAME;

exports.handler = async (event) => {
  console.log("Event -->", event);
  const { request, userName } = event;
  const { sub } = request.userAttributes;

  // to match usernames stored inside event as per appsync owner's rule.
  const username = `${sub}::${userName}`;

  const userPayload = {
    id: username,
    username,
    slug: uuidv4(),
    ctaButton: [
      {
        text: "Contact",
        isActive: true,
        type: "LINK",
      },
      {
        text: "1 x 1 Consultation",
        isActive: true,
        type: "LINK",
      },
    ],
    profileStatusCode: "step1",
    email: event.request.userAttributes.email ?? null,
    phone: event.request.userAttributes.phone ?? null,
    name: event.request.userAttributes.name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __typename: "Influencer",
  };

  const sectionPayload = {
    id: uuidv4(),
    influencerId: username,
    title: "My stuff",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isArchived: false,
    position: 1,
    __typename: "Section",
  };

  try {
    await db.put({ TableName: INFLUENCER_TABLE, Item: userPayload }).promise();
    await db.put({ TableName: SECTION_TABLE, Item: sectionPayload }).promise();
    return event;
  } catch (err) {
    console.log("Error", err);
    return event;
  }
};
