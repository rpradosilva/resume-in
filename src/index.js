const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

async function robot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let shortcut, email, pass;

  shortcut = readlineSync.question("https://www.linkedin.com/in/: ");
  email = readlineSync.question("E-mail: ");
  pass = readlineSync.question("Password: ");

  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  console.warn("Logging...");
  await page.type("[id='username']", email, { delay: 200 });
  await page.type("[id='password']", pass, { delay: 200 });
  await page.click("[type='submit']");
  await page.waitForNavigation();
  console.warn("Login sucessfull!");
  console.log("...");

  console.warn("Scraping personal data...");
  await page.goto(`https://www.linkedin.com/in/${shortcut}/`);
  await page.waitForSelector(".pv-text-details__left-panel h1");
  let myName = await page.evaluate(() => {
    return document.querySelector(".pv-text-details__left-panel h1")
      .textContent;
  });
  console.log(`Meu nome é ${myName}`);

  // capture experience data
  console.warn("Scraping experiencies...");
  await page.goto(
    `https://www.linkedin.com/in/${shortcut}/details/experience/`
  );
  await page.waitForSelector(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
  );
  let experienceItems = await page.evaluate(() => {
    return document.querySelectorAll(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
    ).length;
  });
  console.log(`Já tive ${experienceItems} empregos`);

  await browser.close();
  console.log("Finished! ✔");
}

robot();
