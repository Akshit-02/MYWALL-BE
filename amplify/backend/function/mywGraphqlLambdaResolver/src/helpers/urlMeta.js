const openGraphScrapper = require("open-graph-scraper");
const axios = require("axios");
const dom = require("xmldom").DOMParser;

const getUrlDetails = async (link) => {
  const options = { url: link };
  let result;

  try {
    const data = await openGraphScrapper(options);
    result = data.result;
  } catch (error) {
    console.error("Failed to scrape Open Graph data:", error);
  }

  const { ogImage, ogTitle, ogDescription } = result || {};
  const [{ url: ogImageUrl } = {}] = ogImage || [];

  let description = "",
    title = "",
    image = "";
  let doc;

  try {
    const response = await axios.get(link);
    doc = new dom().parseFromString(response.data);

    if (!ogDescription) {
      description = await findMetaByValue(doc, "description");
    }
    if (!ogTitle) {
      title = await findMetaByValue(doc, "title");
    }
    if (!ogImage) {
      image = await findMetaByValue(doc, "image");
    }
  } catch (error) {
    console.error("Failed to fetch URL details:", error);
  } finally {
    return {
      image: ogImageUrl || image || null,
      title: ogTitle || title || null,
      description: ogDescription || description || null,
    };
  }
};

const findMetaByValue = async (doc, value) => {
  try {
    const metaElements = doc.getElementsByTagName("meta");

    if (value === "image") {
      const matchingMetaElement = Array.from(metaElements).filter(
        (metaElement) => {
          // Iterate over attributes of each meta element
          for (let i = 0; i < metaElement.attributes.length; i++) {
            const attribute = metaElement.attributes[i];
            if (attribute.value.includes(value)) {
              return true;
            }
          }
          return false;
        }
      );

      const pattern = /^http[s]?:\/\/.+/;

      return (
        matchingMetaElement
          .map((e) =>
            Array.from(e?.attributes || []).find((a) => {
              if (pattern.test(a.value)) return true;
              else false;
            })
          )
          .filter(Boolean)?.[0]?.nodeValue || null
      );
    }

    const matchingMetaElement = Array.from(metaElements).find((metaElement) => {
      // Iterate over attributes of each meta element
      for (let i = 0; i < metaElement.attributes.length; i++) {
        const attribute = metaElement.attributes[i];
        if (attribute.value.includes(value)) {
          return true;
        }
      }
      return false;
    });

    return (
      Array.from(matchingMetaElement?.attributes || []).find(
        (ele) => ele.name === "content"
      )?.nodeValue || null
    );
  } catch (error) {
    return;
  }
};

module.exports = {
  getUrlDetails,
};
