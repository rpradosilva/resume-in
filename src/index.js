const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
const fs = require("fs");

async function scrapingRobot() {
  const browser = await puppeteer.launch({ headless: false });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  // set window size

  let credentials = await config();
  await login(page, credentials);

  let permalink = await profile(page);
  await getPDF(page);

  await browser.close();
  console.log(" ");
  console.log("✔ Finished!");
}

async function config() {
  console.log("Login LinkedIn -------------------------");
  let email, pass;

  email = readlineSync.questionEMail("E-mail: ");
  pass = readlineSync.question("Password: ", { hideEchoBack: true });

  return { email, pass };
}

async function login(page, credentials) {
  console.log(" ");
  console.log("----------------------------------------");
  console.warn("Logging into LinkedIn...");

  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  await page.type("[id='username']", credentials.email, { delay: 200 });
  await page.type("[id='password']", credentials.pass, { delay: 200 });
  await page.click("[type='submit']");
  await page.waitForNavigation();

  console.log("✔ Login sucessfull!");
}

async function profile(page) {
  console.log(" ");
  console.warn("Access profile...");

  await page.click(".feed-identity-module__actor-meta.break-words a");
  await page.waitForNavigation();

  return await page.url();
}

async function getPDF(page) {
  console.warn("Download data...");

  let downloadPath = "./pdf";

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  await page.waitForNavigation();

  // await page._client.send("Page.setDownloadBehavior", {
  //   behavior: "allow",
  //   downloadPath: downloadPath,
  // });

  // await page.click(
  //   ".pv-top-card-v2-ctas.pt2.display-flex .pvs-profile-actions .artdeco-dropdown.artdeco-dropdown--placement-bottom.artdeco-dropdown--justification-left.ember-view button"
  // );
  // await page.click("[data-control-name='save_to_pdf']");
}

scrapingRobot();
