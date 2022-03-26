const spinnies = require("./utils/loader");

async function login(page, credentials) {
  const LOADER = {
    ID: "login",
    TEXT: {
      ADD: "Logging",
      SUCCEED: "Login sucessfull",
    },
  };
  const SELECTOR = {
    LOGIN: {
      PAGE: ".nav__button-secondary",
      USER: "[id='username']",
      PASS: "[id='password']",
      SUBMIT: "[type='submit']",
    },
  };

  spinnies.add(LOADER.ID, { text: LOADER.TEXT.ADD });
  await page.goto("https://www.linkedin.com/");
  await page.click(SELECTOR.LOGIN.PAGE);
  await page.type(SELECTOR.LOGIN.USER, credentials.email, { delay: 300 });
  await page.type(SELECTOR.LOGIN.PASS, credentials.pass, { delay: 300 });
  await page.click(SELECTOR.LOGIN.SUBMIT);
  spinnies.succeed(LOADER.ID, { text: LOADER.TEXT.SUCCEED });
}
async function profile(page) {
  const LOADER = {
    ID: "profile",
    TEXT: {
      ADD: "Access profile",
      SUCCEED: "Profile Loaded",
    },
  };
  const SELECTOR = {
    PROFILE: {
      PAGE: ".feed-identity-module__actor-meta.break-words a",
    },
  };

  spinnies.add(LOADER.ID, { text: LOADER.TEXT.ADD });
  await page.waitForSelector(SELECTOR.PROFILE.PAGE);
  await page.click(SELECTOR.PROFILE.PAGE);
  await page.waitForNavigation();
  spinnies.succeed(LOADER.ID, { text: LOADER.TEXT.SUCCEED });
  return await page.url();
}

module.exports = { login, profile };
