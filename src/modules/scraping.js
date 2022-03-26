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
  const LOADER = {
    SCRAPING: {
      ID: "scraping",
      TEXT: {
        ADD: "Scraping",
        SUCCEED: "Scraped successfully",
      },
    },
    PERSONAL: {
      ID: "scraping-personal",
      TEXT: {
        ADD: "Personal data",
        SUCCEED: "Personal data",
      },
    },
    EXPERIENCE: {
      ID: "scraping-experience",
      TEXT: {
        ADD: "Experiences data",
        SUCCEED: "Experiences data",
      },
    },
    EDUCATION: {
      ID: "scraping-education",
      TEXT: {
        ADD: "Education data",
        SUCCEED: "Education data",
      },
    },
    CERTIFICATION: {
      ID: "scraping-certification",
      TEXT: {
        ADD: "Certification data",
        SUCCEED: "Certification data",
      },
    },
  };

  spinnies.add(LOADER.SCRAPING.ID, { text: LOADER.SCRAPING.TEXT.ADD });

  spinnies.add(LOADER.PERSONAL.ID, { text: LOADER.PERSONAL.TEXT.ADD });
  let { id, personal } = await personalData(page, url);
  spinnies.succeed(LOADER.PERSONAL.ID, { text: LOADER.PERSONAL.TEXT.SUCCEED });

  spinnies.add(LOADER.EXPERIENCE.ID, { text: LOADER.EXPERIENCE.TEXT.ADD });
  let experiences = await experiencesData(id, page, url);
  spinnies.succeed(LOADER.EXPERIENCE.ID, {
    text: LOADER.EXPERIENCE.TEXT.SUCCEED,
  });

  spinnies.add(LOADER.EDUCATION.ID, { text: LOADER.EXPERIENCE.TEXT.ADD });
  let education = await educationData(id, page, url);
  spinnies.succeed(LOADER.EDUCATION.ID, {
    text: LOADER.EDUCATION.TEXT.SUCCEED,
  });

  spinnies.add(LOADER.CERTIFICATION.ID, {
    text: LOADER.CERTIFICATION.TEXT.ADD,
  });
  let certifications = await certificationData(id, page, url);
  spinnies.succeed(LOADER.CERTIFICATION.ID, {
    text: LOADER.CERTIFICATION.TEXT.SUCCEED,
  });

  spinnies.succeed(LOADER.SCRAPING.ID, { text: LOADER.SCRAPING.TEXT.SUCCEED });

  return { id, personal, experiences, education, certifications };
}

module.exports = { data };
