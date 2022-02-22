const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
const fs = require("fs");

async function scrapingRobot() {
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  const credentialsPath = "./credentials.json";

  let credentials = await config(credentialsPath);
  await login(page, credentials);

  let permalink = `https://www.linkedin.com/in/${credentials.shortcut}/`;
  await getPersonalData(page, permalink);

  await browser.close();
  console.log("Finished! ✔");
}

async function config(credentialsPath) {
  let shortcut, email, pass;

  if (fs.existsSync(credentialsPath)) {
    let credentials = JSON.parse(fs.readFileSync(credentialsPath));

    shortcut = credentials.shortcut;
    email = credentials.email;
    pass = credentials.pass;
  } else {
    shortcut = readlineSync.question("https://www.linkedin.com/in/: ");
    email = readlineSync.question("E-mail: ");
    pass = readlineSync.question("Password: ");

    let data = JSON.stringify({ shortcut, email, pass });
    fs.writeFileSync(credentialsPath, data, "utf-8");
  }

  return { shortcut, email, pass };
}

async function login(page, credentials) {
  console.warn("Logging...");

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
