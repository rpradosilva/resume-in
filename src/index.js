const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
const fs = require("fs");

async function scrapingRobot() {
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  let credentials = await config();
  await login(page, credentials);
  await page.click(".feed-identity-module__actor-meta.break-words a");
  await page.waitForNavigation();

  let permalink = await page.url();
  await getPersonalData(page, permalink);

  await browser.close();
  console.log("Finished! ✔");
}

async function config() {
  console.warn("### Login LinkedIn: ###");
  let email, pass;

  email = readlineSync.questionEMail("E-mail: ");
  pass = readlineSync.question("Password: ", { hideEchoBack: true });

  return { email, pass };
}

async function login(page, credentials) {
  console.warn("Logging into LinkedIn...");

  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  await page.type("[id='username']", credentials.email, { delay: 300 });
  await page.type("[id='password']", credentials.pass, { delay: 300 });
  await page.click("[type='submit']");
  await page.waitForNavigation();

  console.warn("Login sucessfull!");
  console.log("...");
}

async function getPersonalData(page, permalink) {
  console.warn("Scraping personal data...");

  await page.goto(permalink);
  await page.waitForSelector(".pv-text-details__left-panel h1");

  let myName = await page.evaluate(() => {
    return document.querySelector(".pv-text-details__left-panel h1")
      .textContent;
  });

  return console.log(`Meu nome é ${myName}`);
}

scrapingRobot();
