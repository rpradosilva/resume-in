const { profileId } = require("../template/selectors.json");

module.exports = async (page, capture, permalink, identificator) => {
  console.warn(">> Scraping data...");
  let id, name;

  id = await identificator(page, profileId, permalink);

  name = await capture(page, ".pv-text-details__left-panel h1", "textContent");

  return console.log(`my name is ${name} and my ID is ${id}`);
};
