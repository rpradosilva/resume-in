const personalData = require("./utils/personal");
const experiencesData = require("./utils/experiences");
const educationData = require("./utils/education");
const certificationData = require("./utils/certifications");
const spinnies = require("./utils/loader");

async function data(page, permalink) {
  spinnies.add("scraping", { text: "Scraping" });

  const url = {
    personal: `${permalink}edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION`,
    summary: `${permalink}edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION`,
    contact: `${permalink}edit/contact-info/`,
    experiences: `${permalink}details/experience/`,
    education: `${permalink}details/education/`,
    certifications: `${permalink}details/certifications/`,
  };

  spinnies.add("scraping-personal", { text: "Personal data" });
  let { id, personal } = await personalData(page, url);
  spinnies.succeed("scraping-personal", { text: "Personal data" });

  spinnies.add("scraping-experiences", { text: "Experiences data" });
  let experiences = await experiencesData(id, page, url);
  spinnies.succeed("scraping-experiences", { text: "Experiences data" });

  spinnies.add("scraping-education", { text: "Education data" });
  let education = await educationData(id, page, url);
  spinnies.succeed("scraping-education", { text: "Education data" });

  spinnies.add("scraping-certifications", { text: "Certifications data" });
  let certifications = await certificationData(id, page, url);
  spinnies.succeed("scraping-certifications", { text: "Certifications data" });

  spinnies.succeed("scraping", { text: "Scraped successfully" });

  return { id, personal, experiences, education, certifications };
}

module.exports = { data };
