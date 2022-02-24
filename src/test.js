const fs = require("fs");
const PDFParser = require("pdf2json");
const pdf = fs.readFileSync("./data/Profile.pdf");

let pdfParser = new PDFParser();

pdfParser.loadPDF(pdf);

pdfParser.on("pdfParser_dataReady", (pdfData) => {
  console.log(pdfData);
  fs.writeFile("./pdf2json/data.json", JSON.stringify(pdfData));
});
