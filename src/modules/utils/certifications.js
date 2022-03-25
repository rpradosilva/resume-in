const capture = require("./capture");

async function certifications(id, page, url) {
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
      let certifiedId = certified.match(/(?:%2C)(.*)(?:%29)/i)[1].toString();
      let logo;

      await page.goto(`${url.certifications}edit/forms/${certifiedId}/`);
      await page.waitForSelector(".pv4.ph5");

      let name = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-name`,
        "value"
      );

      let company = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-company`,
        "value"
      );

      if (
        (await page.$(
          ".ivm-view-attr__img--centered.ivm-view-attr__entity-img--company.fb-single-typeahead-entity__image.lazy-image.ember-view"
        )) !== null
      ) {
        logo = await capture(
          page,
          `.ivm-view-attr__img--centered.ivm-view-attr__entity-img--company.fb-single-typeahead-entity__image.lazy-image.ember-view`,
          "src"
        );
      } else {
        logo = "";
      }

      let startMonth = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-dateRange-start-date`,
        "value"
      );

      let startYear = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-dateRange-start-date-year-select`,
        "value"
      );

      let endMonth = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-dateRange-end-date`,
        "value"
      );

      let endYear = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-dateRange-end-date-year-select`,
        "value"
      );

      let license = await capture(
        page,
        `#single-line-text-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-licenseNumber`,
        "value"
      );

      let certifiedUrl = await capture(
        page,
        `#single-line-text-form-component-profileEditFormElement-CERTIFICATION-profileCertification-${id}-${certifiedId}-url-error`,
        "value"
      );

      let notExpire = await page.$eval(
        ".fb-text-selectable__option.display-flex input",
        (element) => element.checked
      );

      let duration = {
        startMonth,
        startYear,
        endMonth,
        endYear,
      };

      items.push({
        certifiedId,
        name,
        company,
        logo,
        license,
        certifiedUrl,
        duration,
        notExpire,
      });
    }
  } else {
    items = [];
  }

  return items;
}

module.exports = certifications;
