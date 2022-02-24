const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
const fs = require("fs");
const path = require("path");

async function scrapingRobot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let credentials = await config();
  await login(page, credentials);

  await profile(page);
  await getData(page);

  await browser.close();
  console.log(" ");
  console.log("Finished!");
}

async function config() {
  console.log("Login LinkedIn -------------------------");
  let email, pass;

  email = readlineSync.questionEMail("E-mail: ");
  pass = readlineSync.question("Password: ", { hideEchoBack: true });

  return { email, pass };
}

async function login(page, credentials) {
  console.log("----------------------------------------");
  console.log(" ");
  console.warn("Logging...");

  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  await page.type("[id='username']", credentials.email, { delay: 200 });
  await page.type("[id='password']", credentials.pass, { delay: 200 });
  await page.click("[type='submit']");
  await page.waitForNavigation();

  console.log("Login sucessfull!");
}

async function profile(page) {
  console.log(" ");
  console.warn(">> Access profile...");

  await page.click(".feed-identity-module__actor-meta.break-words a");
  await page.waitForNavigation();
}

async function getData(page) {
  console.warn(">> Download data...");

  const downloadPath = "./data";
  const saveFile = path.resolve(downloadPath);

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  await page.waitForTimeout(5000);
  await page.click(
    ".pv-top-card-v2-ctas.pt2.display-flex .pvs-profile-actions .artdeco-dropdown.artdeco-dropdown--placement-bottom.artdeco-dropdown--justification-right.ember-view button"
  );
  await page.waitForTimeout(8000);
  await page.click("[aria-hidden='false'] [data-control-name='save_to_pdf']");

  await page._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: saveFile,
  });

  await page.waitForTimeout(10000);
  console.log("Downloaded!");
}

scrapingRobot();
