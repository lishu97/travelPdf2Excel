const moment = require('moment');
const parseTextDidi = require('./parseTextDidi');
const parseTextGaode = require('./parseTextGaode');
const parseTextT3 = require('./parseTextT3');

function getDetailByText(pdfText) {
    switch (true) {
        case /滴滴出行/.test(pdfText): {
            return parseTextDidi(pdfText);
        }
        // case /高德地图/.test(pdfText): {
        //     return parseTextGaode(pdfText);
        // }
        // case /T(@@)?3(@@)?出(@@)?行/.test(pdfText): {
        //     return parseTextT3(pdfText);
        // }
        default: {
            console.warn('未识别的行程单类型', pdfText);
            return []
        }
    }
}

module.exports = function(pdfTexts){
    let detail = [];
    pdfTexts.forEach(pdfText => {
        detail = detail.concat(getDetailByText(pdfText));
    })
    return detail.sort((a, b) => a.time - b.time)
        .map(item => ({
            ...item,
            time: moment(item.moment).format('HH:mm'),   
            date: moment(item.moment).format('YYYY/M/D'),   
        }));
}