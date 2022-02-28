const personalData = require("./utils/personal");

async function data(page, permalink) {
  console.log(" ");
  console.warn(">> Scraping data...");

  const url = {
    personal: `${permalink}edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION`,
    summary: `${permalink}edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION`,
    contact: `${permalink}edit/contact-info/`,
  };

  let { id, personal } = await personalData(page, url);

  return { id, personal };
}

module.exports = { data };
