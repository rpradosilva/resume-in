const capture = require("./capture");

async function certifications(id, page, url) {
  console.log(">> certifications data...");
  let items = [];

  if (
    (await page.$(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
    )) !== null
  ) {
    await page.goto(url.certifications);
    await page.waitForSelector(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
    );

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
