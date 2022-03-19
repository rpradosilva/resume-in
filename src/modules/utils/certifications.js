const capture = require("./capture");

async function certifications(id, page, url) {
  console.log(">> certifications data...");

  let items = [];

  await page.goto(url.certifications);
  await page.waitForSelector(
    ".display-flex.justify-flex-start.align-items-center.pt3.ph3"
  );

  if (
    (await page.$(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
    )) !== null
  ) {
    const certificates = await page.$$eval(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested a.optional-action-target-wrapper.artdeco-button.artdeco-button--tertiary.artdeco-button--3.artdeco-button--muted.artdeco-button--circle.inline-flex.justify-center.align-self-flex-start",
      (certificates) => certificates.map((certified) => certified.href)
    );

    for (const certified of certificates) {
      let logo;
      let certifiedId = certified.match(/(?:%2C)(.*)(?:%29)/i)[1].toString();

      console.log(certifiedId);

      items.push({ certifiedId });
    }
  } else {
    items = [];
    console.log("pulou");
  }

  return items;
}

module.exports = certifications;
