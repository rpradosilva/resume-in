const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function simplefileDownload() {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const downloadPath = "./pdf";
  const saveFile = path.resolve(downloadPath);

  const page = await browser.newPage();
  await page.goto("https://unsplash.com/photos/tn57JI3CewI");

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  await page.click("[data-test='non-sponsored-photo-download-button']");

  await page._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: saveFile,
  });
  await page.waitForTimeout(5000);
  await browser.close();
}
simplefileDownload();
