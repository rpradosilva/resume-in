const fs = require("fs");
const spinnies = require("./utils/loader");

async function json(scraped) {
  const LOADER = {
    ID: "generate",
    TEXT: {
      ADD: "Generate JSON",
      SUCCEED: "Saving successfully",
    },
  };

  spinnies.add(LOADER.ID, { text: LOADER.TEXT.ADD });
  let dataPath = "./data.json";
  let data = JSON.stringify(scraped, null, 2);
  fs.writeFileSync(dataPath, data, "utf-8");
  spinnies.succeed(LOADER.ID, { text: LOADER.TEXT.SUCCEED });
}

module.exports = { json };
