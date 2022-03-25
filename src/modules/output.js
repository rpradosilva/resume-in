const fs = require("fs");
const spinnies = require("./utils/loader");

async function json(scraped) {
  spinnies.add("generate", { text: "Generate JSON" });

  let dataPath = "./data.json";
  let data = JSON.stringify(scraped, null, 2);
  fs.writeFileSync(dataPath, data, "utf-8");

  spinnies.succeed("generate", { text: "Saving successfully" });
}

module.exports = { json };
