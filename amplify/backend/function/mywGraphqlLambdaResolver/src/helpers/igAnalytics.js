const structurizePercentageData = (percentageData) => {
  return percentageData.map((item) => ({
    ageGroup: item[0],
    percentage: item[1],
  }));
};

const structurizeTopAudienceCities = (top3Cities) => {
  return top3Cities.map((city) => city[0].split(",")[0]);
};

module.exports = {
  structurizePercentageData,
  structurizeTopAudienceCities,
};
