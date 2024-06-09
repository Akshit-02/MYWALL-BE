const { getUrlDetails } = require("../helpers/urlMeta");

const getUrlMeta = async ({ arguments }) => {
  const { link } = arguments;
  return getUrlDetails(link);
};

module.exports = {
  getUrlMeta,
};
