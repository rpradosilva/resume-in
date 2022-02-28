const fs = require("fs");

async function json(scraped) {
  console.log(" ");
  console.log(">> Saving JSON");
  let dataPath = "./data.json";
  let data = JSON.stringify(scraped, null, 2);

  fs.writeFileSync(dataPath, data, "utf-8");
  console.log("Saving successfully!");

  const LinkedinData = fs.readFileSync("./data.json");

  console.log(" ");
  console.log("Generate file -------------------------");
  console.log(JSON.parse(LinkedinData));
  console.log("----------------------------------------");
}

module.exports = { json };
