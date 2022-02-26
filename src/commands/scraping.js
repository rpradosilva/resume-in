module.exports = async (page, capture, permalink) => {
  console.log(" ");
  console.warn(">> Scraping data...");

  const urlPersonal = `${permalink}/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION`;
  const urlSummary = `${permalink}/edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION`;
  const urlContact = `${permalink}/edit/contact-info/`;
  let id,
    photo,
    personal,
    firstName,
    lastName,
    summary,
    position,
    location,
    country,
    state,
    contact,
    tel,
    email;

  if (
    (await page.evaluate(() => {
      return document.querySelector(".ember-view.profile-photo-edit__preview");
    })) != null
  ) {
    photo = await capture(
      page,
      ".ember-view.profile-photo-edit__preview",
      "src"
    );
  } else {
    photo = "";
  }

  await page.goto(urlPersonal);
  await page.waitForSelector(".artdeco-text-input--input");

  id = await capture(page, ".artdeco-text-input--input", "id");
  firstName = await capture(
    page,
    `#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-${id}-firstName`,
    "value"
  );
  lastName = await capture(
    page,
    `#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-${id}-lastName`,
    "value"
  );
  position = await capture(
    page,
    `#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-${id}-headline`,
    "value"
  );
  country = await capture(
    page,
    `#single-typeahead-entity-form-component-profileEditFormElement-TOP-CARD-profile-${id}-geoLocation-countryField`,
    "value"
  );
  state = await capture(
    page,
    `#single-typeahead-entity-form-component-profileEditFormElement-TOP-CARD-profile-${id}-geoLocation-cityTypeaheadField`,
    "value"
  );

  await page.goto(urlSummary);
  await page.waitForSelector(
    `#multiline-text-form-component-profileEditFormElement-SUMMARY-profile-${id}-summary`
  );
  summary = await capture(
    page,
    `#multiline-text-form-component-profileEditFormElement-SUMMARY-profile-${id}-summary`,
    "value"
  );

  await page.goto(urlContact);
  await page.waitForSelector(
    ".pe-contact-info-form__phone-field.ember-view input"
  );
  tel = await capture(
    page,
    ".pe-contact-info-form__phone-field.ember-view input",
    "value"
  );
  let sanitizeEmail = await capture(
    page,
    "[href='/psettings/email']",
    "textContent"
  );
  email = sanitizeEmail.match(/[a-zA-Z]+@\w+\W\w+/g).toString();

  location = { country, state };
  contact = { email, tel };
  personal = {
    photo,
    firstName,
    lastName,
    summary,
    position,
    location,
    contact,
  };

  console.log("Scraped successfully!");

  return { id, personal };
};
