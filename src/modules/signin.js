async function login(page, credentials) {
  console.warn(">> Logging...");
  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  await page.type("[id='username']", credentials.email, { delay: 300 });
  await page.type("[id='password']", credentials.pass, { delay: 300 });
  await page.click("[type='submit']");

  console.log("Login sucessfull!");
}
async function profile(page) {
  console.log(" ");
  console.warn(">> Access profile...");

  await page.waitForSelector(".feed-identity-module__actor-meta.break-words a");

  await page.click(".feed-identity-module__actor-meta.break-words a");
  await page.waitForNavigation();
  return await page.url();
}

module.exports = { login, profile };
