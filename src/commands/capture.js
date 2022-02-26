module.exports = async (page, selector, value) => {
  let content;

  if (value == "textContent") {
    content = await page.$eval(selector, (element) => element.textContent);
  } else if (value == "id") {
    let sanitizeId;
    sanitizeId = await page.$eval(selector, (element) => element.id);
    content = sanitizeId
      .match(/\w+.\d[a-zA-Z]\w+/gm)
      .toString()
      .replace(",", "-");
  } else if (value == "src") {
    content = await page.$eval(selector, (element) => element.src);
  } else {
    content = await page.$eval(selector, (element) => element.value);
  }

  return content;
};
