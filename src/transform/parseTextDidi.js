const moment = require('moment');

// 根据pdf文字长字符串提取行程单第一条记录的年份
const getStartYear = (pdfText) => /行程起止日期:(@@)?(\d*)-(\d*)-\d*\s\S\s(\d*)-(\d*)-/g.exec(pdfText)[2];

function parseTextDidi(pdfText) {
    const detailRecords = [];
    const reg = /@@(\d{1,2})@@(.*?)@@(\d*-\d*)\s(\d*:\d*)\s(.*?)@@(.*?)@@(.*?)@@(.*?)@@(\d*\.\d*)@@(\d*\.\d*)/g
    let result = reg.exec(pdfText);
    let year = getStartYear(pdfText);
    let lastDate = result[3];
    while (result !== null) {
        const [lastMonth, lastDay] = lastDate.split('-');
        const [currentMonth, currentDay] = result[3].split('-');
        if (lastMonth > currentMonth) {
            year++;
            lastDate = `${currentMonth}-${currentDay}`;
        }
        const date = `${year}-${currentMonth}-${currentDay}`;
        detailRecords.push({
            reason: '加班至晚上10点后，无公交',
            money: `${+result[10]}`,
            moment: moment(`${date} ${result[4]}`, 'YYYY-MM-DD HH:mm')
        })
        result = reg.exec(pdfText);
    }
    return detailRecords;
}

module.exports = parseTextDidi;