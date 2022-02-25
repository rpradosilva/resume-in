module.exports = async (page) => {
  console.warn(">> Scraping data...");
  let name;

  await page.waitForSelector(".pv-text-details__left-panel h1");
  name = await capture(page, ".pv-text-details__left-panel h1");

  return console.log(`Test data extract, my name is ${name}`);

  async function capture(page, selector) {
    let element = ".pv-text-details__left-panel h1";

    let content = await page.evaluate((element) => {
      console.log(element);
    }, element);

    return content;
  }
};
