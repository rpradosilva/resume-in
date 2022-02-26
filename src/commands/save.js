module.exports = async (fs, scraped) => {
  console.log(" ");
  console.log(">> Saving JSON");
  let dataPath = "./data.json";
  let data = JSON.stringify(scraped, null, 2);

  fs.writeFileSync(dataPath, data, "utf-8");
  console.log("Saving successfully!");
};
