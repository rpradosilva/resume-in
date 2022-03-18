const personalData = require("./utils/personal");
const experiencesData = require("./utils/experiences");

async function data(page, permalink) {
  console.warn(">> Scraping...");

  const url = {
    personal: `${permalink}edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION`,
    summary: `${permalink}edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION`,
    contact: `${permalink}edit/contact-info/`,
    experiences: `${permalink}details/experience/`,
  };

  let { id, personal } = await personalData(page, url);
  let experiences = await experiencesData(id, page, url);

  console.log("Scraped successfully!");

  return { id, personal, experiences };
}

module.exports = { data };
