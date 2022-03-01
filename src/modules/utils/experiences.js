const capture = require("./capture");

async function experiences(page, url) {
  console.log(">> Experiences data...");

  await page.goto(url.experiences);
  await page.waitForSelector(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
  );

  let items = await page.$$eval(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested",
    (items) => items.map((item) => item)
  );

  console.log(JSON.stringify(items[0]));

  return "test";
}

module.exports = experiences;
