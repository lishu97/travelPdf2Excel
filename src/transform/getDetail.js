const parseTextDidi = require('./parseTextDidi');
const parseTextGaode = require('./parseTextGaode');
const parseTextT3 = require('./parseTextT3');

function getDetailByText(pdfText) {
    switch (pdfText) {
        case /滴滴出行/.test(pdfText): {
            return parseTextDidi(pdfText);
        }
        case /高德地图/.test(pdfText): {
            return parseTextGaode(pdfText);
        }
        case /T(@@)?3(@@)?出(@@)?行/.test(pdfText): {
            return parseTextT3(pdfText);
        }
        default: {
            throw new Error('未识别的行程单类型', pdfText);
        }
    }
}

module.exports = function(pdfTexts){
    const detail = [];
    pdfTexts.forEach(pdfText => {
        detail = detail.concat(getDetailByText(pdfText));
    })
}