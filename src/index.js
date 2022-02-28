const puppeteer = require("puppeteer");

const config = require("./modules/config");
const access = require("./modules/signin");
const scraping = require("./modules/scraping");
const output = require("./modules/output");
const data = require("../data.json");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let credentials = await config();

  await access.login(page, credentials);
  let permalink = await access.profile(page);
  let scraped = await scraping.data(page, permalink);

  await browser.close();

  await output.json(scraped);

  console.log(" ");
  console.log("Generate file -------------------------");
  console.log(data);
  console.log("----------------------------------------");
})();
