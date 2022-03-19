const capture = require("./capture");

async function experiences(id, page, url) {
  console.log(">> Experiences data...");

  await page.goto(url.experiences);
  await page.waitForSelector(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
  );

  let items = [];
  const jobs = await page.$$eval(
    ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested a.optional-action-target-wrapper.artdeco-button.artdeco-button--tertiary.artdeco-button--3.artdeco-button--muted.artdeco-button--circle.inline-flex.justify-center.align-self-flex-start",
    (jobs) => jobs.map((job) => job.href)
  );

  for (const job of jobs) {
    let jobId = job.match(/(?:%2C)(.*)(?:%29)/i)[1].toString();
    let company;

    await page.goto(`${url.experiences}edit/forms/${jobId}/`);
    await page.waitForSelector(".pv4.ph5+.pv4.ph5");

    if (
      (await page.$(
        `#single-typeahead-entity-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-requiredCompany`
      )) !== null
    ) {
      company = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-requiredCompany`,
        "value"
      );
    } else {
      company = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-optionalCompany`,
        "value"
      );
    }

    let logo = await capture(
      page,
      `.ivm-view-attr__img--centered.ivm-view-attr__entity-img--company.fb-single-typeahead-entity__image.lazy-image.ember-view`,
      "src"
    );

    let title = await capture(
      page,
      `#single-typeahead-entity-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-title`,
      "value"
    );

    let contract = await capture(
      page,
      `#text-entity-list-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-employmentStatus`,
      "value"
    );

    let location = await capture(
      page,
      `#single-typeahead-entity-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-geoPositionLocation`,
      "value"
    );

    let startMonth = await capture(
      page,
      `#date-range-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-dateRange-start-date`,
      "value"
    );

    let startYear = await capture(
      page,
      `#date-range-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-dateRange-start-date-year-select`,
      "value"
    );

    let endMonth = await capture(
      page,
      `#date-range-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-dateRange-end-date`,
      "value"
    );

    let endYear = await capture(
      page,
      `#date-range-form-component-profileEditFormElement-POSITION-profilePosition-${id}-${jobId}-dateRange-end-date-year-select`,
      "value"
    );

    let isTheCurrentJob = await page.$eval(
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
      jobId,
      company,
      logo,
      title,
      contract,
      location,
      duration,
      isTheCurrentJob,
    });
  }

  return items;
}

module.exports = experiences;
