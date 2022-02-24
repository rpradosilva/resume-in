module.exports = async (page, credentials) => {
  console.log("----------------------------------------");
  console.log(" ");
  console.warn("Logging...");

  await page.goto("https://www.linkedin.com/");
  await page.click(".nav__button-secondary");
  await page.type("[id='username']", credentials.email, { delay: 200 });
  await page.type("[id='password']", credentials.pass, { delay: 200 });
  await page.click("[type='submit']");

  console.log("Login sucessfull!");
};
