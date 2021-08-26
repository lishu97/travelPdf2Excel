const PDFParser = require("pdf2json");

// 把pdf中文字提取出来，用连接符拼接成一个长字符串
/**
 * @description: 
 * @param {*} inputFilePath
 * @return {*}
 */
function getPdfText(inputFilePath) {
    const pdfParser = new PDFParser();
    return new Promise((resolve, reject) => {
        pdfParser.on("pdfParser_dataError", errData => reject(errData));
        pdfParser.on("pdfParser_dataReady", pdfData => {
            const pdfText = pdfData.formImage.Pages.reduce((text, page) => {
                return text + page.Texts.map(item => ({
                        ...item,
                        R: item.R = item.R.map(textInfo => ({
                            ...textInfo,
                            T: decodeURIComponent(textInfo.T)
                        }))
                    }))
                    .map(item => item.R[0].T).join('@@');
            }, '')
            resolve(pdfText)
        })
        pdfParser.loadPDF(inputFilePath);
    })
}

module.exports = getPdfText;