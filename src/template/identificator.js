module.exports = async (page, selector, permalink) => {
  await page.goto(
    `${permalink}/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION`
  );
  await page.waitForSelector(selector);

  return await page.$eval(selector, (element) => element.id);
};
