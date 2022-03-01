async function capture(page, selector, value) {
  let content;

  switch (value) {
    case "textContent":
      content = await page.$eval(selector, (element) => element.textContent);
      break;

    case "src":
      content = await page.$eval(selector, (element) => element.src);
      break;

    case "id":
      let sanitizeId;
      sanitizeId = await page.$eval(selector, (element) => element.id);
      content = sanitizeId
        .match(/\w+.\d[a-zA-Z]\w+/gm)
        .toString()
        .replace(",", "-");
      break;

    default:
      content = await page.$eval(selector, (element) => element.value);
      break;
  }

  return content;
}

module.exports = capture;
