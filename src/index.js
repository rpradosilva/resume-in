const puppeteer = require("puppeteer");
const fs = require("fs");

const config = require("./commands/config");
const login = require("./commands/login");
const profile = require("./commands/profile");
const scraping = require("./commands/scraping");
const capture = require("./commands/capture");
const save = require("./commands/save");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let credentials = await config(fs);

  await login(page, credentials);
  let permalink = await profile(page);
  let scraped = await scraping(page, capture, permalink);

  await browser.close();

  await save(fs, scraped);

  const LinkedinData = fs.readFileSync("./data.json");

  console.log(" ");
  console.log("Generate file -------------------------");
  console.log(JSON.parse(LinkedinData));
  console.log("----------------------------------------");
})();
