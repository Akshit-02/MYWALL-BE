/* Amplify Params - DO NOT EDIT
	API_MYWBACKEND_CUSTOMLINKTABLE_ARN
	API_MYWBACKEND_CUSTOMLINKTABLE_NAME
	API_MYWBACKEND_FACEBOOKVIDEOTABLE_ARN
	API_MYWBACKEND_FACEBOOKVIDEOTABLE_NAME
	API_MYWBACKEND_GRAPHQLAPIIDOUTPUT
	API_MYWBACKEND_INFLUENCERTABLE_ARN
	API_MYWBACKEND_INFLUENCERTABLE_NAME
	API_MYWBACKEND_INSTAGRAMVIDEOTABLE_ARN
	API_MYWBACKEND_INSTAGRAMVIDEOTABLE_NAME
	API_MYWBACKEND_LOGOTABLE_ARN
	API_MYWBACKEND_LOGOTABLE_NAME
	API_MYWBACKEND_MEDIATABLE_ARN
	API_MYWBACKEND_MEDIATABLE_NAME
	API_MYWBACKEND_SECTIONTABLE_ARN
	API_MYWBACKEND_SECTIONTABLE_NAME
	API_MYWBACKEND_SUBSECTIONTABLE_ARN
	API_MYWBACKEND_SUBSECTIONTABLE_NAME
	API_MYWBACKEND_YOUTUBEVIDEOTABLE_ARN
	API_MYWBACKEND_YOUTUBEVIDEOTABLE_NAME
	ENV
	REGION
	STORAGE_MYWSTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

const { getInfluencerBySlug } = require("./resolvers/influencers");
const {
  syncYoutubeRepository,
  createYoutubeItems,
} = require("./resolvers/youtube");
const {
  syncFacebookRepository,
  createFacebookItems,
} = require("./resolvers/facebook");
const {
  syncInstagramRepository,
  createInstagramItems,
} = require("./resolvers/instagram");
const { createCustomLinkItems } = require("./resolvers/customLink");
const { getUrlMeta } = require("./resolvers/urlMeta");

const { sortSubSectionByPosition } = require("./resolvers/subSection");

const { sortSectionByPosition } = require("./resolvers/section");

const { createMediaItems } = require("./resolvers/media");

const { createLogoItems } = require("./resolvers/logo");

const { syncInstagramAnalytics } = require("./resolvers/igAnalytics");

const { syncYoutubeAnalytics } = require("./resolvers/ytAnalytics");

const { sendEmailData } = require("./resolvers/sendContactFormDataEmail");
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`🔥 ~ EVENT: ${JSON.stringify(event)}`);
  const { fieldName } = event;

  switch (fieldName) {
    case "getInfluencerBySlug":
      return getInfluencerBySlug(event.arguments.slug);

    case "syncYoutubeRepository":
      return syncYoutubeRepository(event);

    case "createYoutubeItems":
      return createYoutubeItems(event);

    case "syncFacebookRepository":
      return syncFacebookRepository(event);

    case "createFacebookItems":
      return createFacebookItems(event);

    case "syncInstagramRepository":
      return syncInstagramRepository(event);

    case "createInstagramItems":
      return createInstagramItems(event);

    case "createCustomLinkItems":
      return createCustomLinkItems(event);

    case "getUrlMeta":
      return getUrlMeta(event);

    case "sortSubSectionByPosition":
      return sortSubSectionByPosition(event);

    case "sortSectionByPosition":
      return sortSectionByPosition(event);

    case "syncMediaRepository":
      return syncMediaRepository(event);

    case "createMediaItems":
      return createMediaItems(event);

    case "createLogoItems":
      return createLogoItems(event);

    case "syncInstagramAnalytics":
      return syncInstagramAnalytics(event);

    case "syncYoutubeAnalytics":
      return syncYoutubeAnalytics(event);

    case "sendContactFormEmail":
      return sendEmailData(event);

    default:
      return null;
  }
};
