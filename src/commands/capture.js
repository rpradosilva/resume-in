module.exports = async (page, selector, value) => {
  let content;
  await page.waitForSelector(selector);

  if (value == "textContent") {
    content = await page.$eval(selector, (element) => element.textContent);
  } else {
    content = await page.$eval(selector, (element) => element.value);
  }

  return content;
};
