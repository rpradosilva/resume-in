const personalData = require("./utils/personal");
const experiencesData = require("./utils/experiences");
const educationData = require("./utils/education");
const certificationData = require("./utils/certifications");

async function data(page, permalink) {
  console.warn(">> Scraping...");

  const url = {
    personal: `${permalink}edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION`,
    summary: `${permalink}edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION`,
    contact: `${permalink}edit/contact-info/`,
    experiences: `${permalink}details/experience/`,
    education: `${permalink}details/education/`,
    certifications: `${permalink}details/certifications/`,
  };

  let { id, personal } = await personalData(page, url);
  let experiences = await experiencesData(id, page, url);
  let education = await educationData(id, page, url);
  let certifications = await certificationData(id, page, url);

  console.log("Scraped successfully!");

  return { id, personal, experiences, education, certifications };
}

module.exports = { data };
