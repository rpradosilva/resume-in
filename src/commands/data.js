module.exports = async (page) => {
  await page.waitForSelector(".pv-text-details__left-panel h1");

  let myName = await page.evaluate(() => {
    return document.querySelector(".pv-text-details__left-panel h1")
      .textContent;
  });

  return console.log(`Test data extract, my name is ${myName}`);
};
