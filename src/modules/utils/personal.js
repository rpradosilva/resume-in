const capture = require("./capture");

async function personal(page, url) {
  let photo;
  let ifPhotoExists = await page.evaluate(() => {
    return document.querySelector(".ember-view.profile-photo-edit__preview");
  });

  if (ifPhotoExists != null) {
    photo = await capture(
      page,
      ".ember-view.profile-photo-edit__preview",
      "src"
    );
  } else {
    photo = "";
  }

  await page.goto(url.personal);
  await page.waitForSelector(".artdeco-text-input--input");

  let id = await capture(page, ".artdeco-text-input--input", "id");
  let firstName = await capture(
    page,
    `#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-${id}-firstName`,
    "value"
  );
  let lastName = await capture(
    page,
    `#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-${id}-lastName`,
    "value"
  );
  let name = `${firstName} ${lastName}`;
  let position = await capture(
    page,
    `#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-${id}-headline`,
    "value"
  );
  let country = await capture(
    page,
    `#single-typeahead-entity-form-component-profileEditFormElement-TOP-CARD-profile-${id}-geoLocation-countryField`,
    "value"
  );
  let state = await capture(
    page,
    `#single-typeahead-entity-form-component-profileEditFormElement-TOP-CARD-profile-${id}-geoLocation-cityTypeaheadField`,
    "value"
  );

  await page.goto(url.summary);
  await page.waitForSelector(
    `#multiline-text-form-component-profileEditFormElement-SUMMARY-profile-${id}-summary`
  );
  let summary = await capture(
    page,
    `#multiline-text-form-component-profileEditFormElement-SUMMARY-profile-${id}-summary`,
    "value"
  );

  await page.goto(url.contact);
  await page.waitForSelector(
    "#single-line-text-form-component-urn-li-fsu-profileContactInfoEditFormElement-PHONE-NUMBER-1"
  );
  let tel = await capture(
    page,
    "#single-line-text-form-component-urn-li-fsu-profileContactInfoEditFormElement-PHONE-NUMBER-1",
    "value"
  );
  let sanitizeEmail = await capture(
    page,
    "[href='https://www.linkedin.com/psettings/email']",
    "textContent"
  );
  let email = sanitizeEmail.match(/[a-zA-Z]+@\w+\W\w+/g).toString();

  let personal = {
    photo,
    name,
    summary,
    position,
    location: {
      country,
      state,
    },
    contact: {
      email,
      tel,
    },
  };

  return { id, personal };
}

module.exports = personal;
