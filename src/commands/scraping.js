module.exports = async (page) => {
  console.warn(">> Scraping data...");
  let name;

  name = await capture(page, ".pv-text-details__left-panel h1", "textContent");

  return console.log(`Test data extract, my name is ${name}`);
};

async function capture(page, selector, value) {
  let content;
  await page.waitForSelector(selector);

  if (value == "textContent") {
    content = await page.$eval(selector, (element) => element.textContent);
  } else {
    content = await page.$eval(selector, (element) => element.value);
  }

  return content;
}
