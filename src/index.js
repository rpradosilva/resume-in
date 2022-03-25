const puppeteer = require("puppeteer");
const config = require("./modules/config");
const access = require("./modules/signin");
const scraping = require("./modules/scraping");
const output = require("./modules/output");
const spinnies = require("./modules/utils/loader");

(async () => {
  spinnies.add("browser", { text: "Starting browser" });
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  spinnies.succeed("browser", { text: "Browser Loaded" });

  let credentials = await config();
  await access.login(page, credentials);
  let permalink = await access.profile(page);
  let scraped = await scraping.data(page, permalink);

  await browser.close();

  await output.json(scraped);
})();
