const fs = require("fs");

async function json(scraped) {
  console.log(" ");
  console.log(">> Saving JSON");
  let dataPath = "./data.json";
  let data = JSON.stringify(scraped, null, 2);

  fs.writeFileSync(dataPath, data, "utf-8");
  console.log("Saving successfully!");
}

module.exports = { json };
