const capture = require("./capture");

async function education(id, page, url) {
  console.log(">> Education data...");

  let items = [];

  await page.goto(url.education);
  await page.waitForSelector(
    ".display-flex.justify-flex-start.align-items-center.pt3.ph3"
  );

  if (
    (await page.$(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
    )) !== null
  ) {
    const courses = await page.$$eval(
      ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested a.optional-action-target-wrapper.artdeco-button.artdeco-button--tertiary.artdeco-button--3.artdeco-button--muted.artdeco-button--circle.inline-flex.justify-center.align-self-flex-start",
      (courses) => courses.map((course) => course.href)
    );

    for (const course of courses) {
      let logo;
      let schoolId = course.match(/(?:%2C)(.*)(?:%29)/i)[1].toString();

      await page.goto(`${url.education}edit/forms/${schoolId}/`);
      await page.waitForSelector(".pv4.ph5+.pv4.ph5");

      let school = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-school`,
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

      let degree = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-degree`,
        "value"
      );

      let fieldsOfStudy = await capture(
        page,
        `#single-typeahead-entity-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-fieldsOfStudy`,
        "value"
      );

      let startMonth = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-dateRange-start-date`,
        "value"
      );

      let startYear = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-dateRange-start-date-year-select`,
        "value"
      );

      let endMonth = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-dateRange-end-date`,
        "value"
      );

      let endYear = await capture(
        page,
        `#date-range-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-dateRange-end-date-year-select`,
        "value"
      );

      let grade = await capture(
        page,
        `#single-line-text-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-grade`,
        "value"
      );

      let activities = await capture(
        page,
        `#multiline-text-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-activities`,
        "value"
      );

      let notes = await capture(
        page,
        `#multiline-text-form-component-profileEditFormElement-EDUCATION-profileEducation-${id}-${schoolId}-notes`,
        "value"
      );

      let duration = {
        startMonth,
        startYear,
        endMonth,
        endYear,
      };

      items.push({
        schoolId,
        school,
        logo,
        degree,
        fieldsOfStudy,
        grade,
        activities,
        notes,
        duration,
      });
    }
  } else {
    items = [];
  }

  return items;
}

module.exports = education;
