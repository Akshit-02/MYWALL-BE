const { bySlugInfluencer } = require("../lib/influencer");

const getInfluencerBySlug = (slug) => bySlugInfluencer(slug);

module.exports = { getInfluencerBySlug };
