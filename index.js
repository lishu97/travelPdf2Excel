const path = require("path");
const pdfParser = require("./src/read/pdfParser.js");
const transform = require("./src/transform/index.js");
const write = require("./src/write/index.js");

function index(
  id,
  name,
  pdfFilePaths,
  outputPath
) {
  return new Promise((resolve, reject) => {
    try {
      Promise.all(pdfFilePaths.map((item) => pdfParser(item))).then((texts) => {
        const transforma = transform({ [`${id}_${name}`]: texts });
        resolve({ status: "success", message: write(transforma, path.join(outputPath, `${id}_${name}.xlsx`)) });
      });
    } catch (error) {
      reject({ status: "error", message: error.message });
    }
  });
}

module.exports = index;
