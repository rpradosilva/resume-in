const puppeteer = require("puppeteer");

const config = require("./commands/config");
const login = require("./commands/login");
const profile = require("./commands/profile");
const scraping = require("./commands/scraping");

async function scrapingRobot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let credentials = await config();

  await login(page, credentials);
  let permalink = await profile(page);
  await scraping(page, permalink);

  await browser.close();
  console.log(" ");
  console.log("Finished!");
}

scrapingRobot();
