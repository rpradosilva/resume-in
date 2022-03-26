const puppeteer = require("puppeteer");
const config = require("./modules/config");
const access = require("./modules/signin");
const scraping = require("./modules/scraping");
const output = require("./modules/output");
const spinnies = require("./modules/utils/loader");

(async () => {
  const LOADER = {
    ID: "browser",
    TEXT: {
      ADD: "Starting browser",
      SUCCEED: "Browser Loaded",
    },
  };

  spinnies.add(LOADER.ID, { text: LOADER.TEXT.ADD });
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  spinnies.succeed(LOADER.ID, { text: LOADER.TEXT.SUCCEED });

  let credentials = await config();
  await access.login(page, credentials);
  let permalink = await access.profile(page);
  let scraped = await scraping.data(page, permalink);

  await browser.close();

  await output.json(scraped);
})();
