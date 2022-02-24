const fs = require("fs");
const pdfparse = require("pdf-parse");
const pdfFile = fs.readFileSync("./data/Profile.pdf");

async function extractData() {
  let pdfData = await pdfparse(pdfFile).then((data) => {
    return data.text;
  });

  console.log(JSON.stringify(pdfData));
}

extractData();
