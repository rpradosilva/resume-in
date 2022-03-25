const spinnies = require("./utils/loader");

async function login(page, credentials) {
  spinnies.add("login", { text: "Logging" });

  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  await page.type("[id='username']", credentials.email, { delay: 300 });
  await page.type("[id='password']", credentials.pass, { delay: 300 });
  await page.click("[type='submit']");

  spinnies.succeed("login", { text: "Login sucessfull" });
}
async function profile(page) {
  spinnies.add("profile", { text: "Access profile" });

  await page.waitForSelector(".feed-identity-module__actor-meta.break-words a");
  await page.click(".feed-identity-module__actor-meta.break-words a");
  await page.waitForNavigation();

  spinnies.succeed("profile", { text: "Profile Loaded" });

  return await page.url();
}

module.exports = { login, profile };
