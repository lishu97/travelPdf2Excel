const moment = require('moment');

// 根据pdf文字长字符串提取行程单第一条记录的年份
const getStartYear = (pdfText) => /行程时间：(@@)?(\d*)-(\d*)-\d*\s(\d*:\d*)?\S(\d*)-(\d*)-\d*\s(\d*:\d*)?/g.exec(pdfText)[2];

function parseTextGaoDe(pdfText) {
    const reg = /@@(\d{1,2})@@(.*?)@@(.*?)@@(\d*-)(\d*-\d*)\s(\d*:\d*)@@(.*?)@@(.*?)@@(.*?)@@(\d*\.\d*)@@/g
    let result = reg.exec(pdfText); 
    const detailRecords = [];
    let year = getStartYear(pdfText)
    let lastDate = result[5];
    while(result !== null){
      const [lastMonth, lastDay] = lastDate.split('-');
      const [currentMonth, currentDay] = result[5].split('-');
      if(lastMonth > currentMonth) {
        year++;
        lastDate = `${currentMonth}-${currentDay}`;
      }
        const date = `${year}-${currentMonth}-${currentDay}`;
        detailRecords.push({
        reason: '加班至晚上10点后，无公交',
        money: `${+result[10]}`,

        moment: moment(`${date} ${result[6]}`, 'YYYY-MM-DD HH:mm'),
      })
      result = reg.exec(pdfText);  
    }
    return detailRecords
  }

module.exports = parseTextGaoDe;
