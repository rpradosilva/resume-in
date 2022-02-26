module.exports = async (page) => {
  console.log(" ");
  console.warn(">> Access profile...");

  await page.waitForSelector(".feed-identity-module__actor-meta.break-words a");

  await page.click(".feed-identity-module__actor-meta.break-words a");
  await page.waitForNavigation();
  return await page.url();
};
