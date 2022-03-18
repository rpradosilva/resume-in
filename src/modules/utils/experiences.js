// const capture = require("./capture");

async function experiences(id, page, url) {
  console.log(">> Experiences data...");

  await page.goto(url.experiences);
  await page.waitForSelector(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
  );

  let items = [];
  const jobLinks = await page.$$eval(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested a.optional-action-target-wrapper.artdeco-button.artdeco-button--tertiary.artdeco-button--3.artdeco-button--muted.artdeco-button--circle.inline-flex.justify-center.align-self-flex-start",
    (jobLinks) => jobLinks.map((link) => link.href)
  );

  for (const link of jobLinks) {
    let id = link.match(/(?:%2C)(.*)(?:%29)/i)[1].toString();
    items.push({ id });
  }

  return items;
}

module.exports = experiences;
