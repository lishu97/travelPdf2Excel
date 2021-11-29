const path = require("path");
const pdfParser = require("./src/read/pdfParser.js");
const transform = require("./src/transform/index.js");
const write = require("./src/write/index.js");


function index(id, name, pdfFilePaths, outputPath=`C:\\Users\\Administrator\\Desktop\\${id}_${name}.xlsx`) {
  Promise.all(pdfFilePaths.map(item => pdfParser(item))).then(texts => {
    const transforma = transform({ [`${id}_${name}`]: texts });
    write(transforma, path.join(outputPath, `${id}_${name}.xlsx`))
  })
}

module.exports = index;