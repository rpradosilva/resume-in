const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("./commands/config");
const login = require("./commands/login");
const profile = require("./commands/profile");
const data = require("./commands/data");

async function scrapingRobot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let credentials = await config();

  await login(page, credentials);
  await profile(page);
  await data(page);

  await browser.close();
  console.log(" ");
  console.log("Finished!");
}

scrapingRobot();
