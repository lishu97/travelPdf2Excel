
const key2Index = {
    date: 1,
    reason: 2,
    time: 3,
    money: 4,
  }; 

// excel内容、总计
function getExcelDetail(wb, ws,excelData) {
  var style = wb.createStyle({
    alignment: {
      horizontal: 'center',
      vertical: 'center'
    },
  });
  
  // excelData.forEach(excelData => {
    var detail = excelData.detail;
    for (var i = 0; i < detail.length; i++) {
      const row = 6 + i;
      for (let key in detail[i]) {
        let detailData = detail[i][key];
        console.log(key2Index[key])
        const col = 1 + key2Index[key];
        if (key !== 'money') {
          ws.cell(row, col)
            .string(detailData)
            .style(style);
        }
        ws.cell(row, 5)
          .number(+detail[i][key = 'money']) 
          .style(style)
          .style({numberFormat: '"￥"#,##0.00_);("￥"#,##0.00)'});
      }
    }

    ws.cell(8 + i, 4)
      .string('合计')
      .style(style);
    ws.cell(8 + i, 5)
      .formula(`sum(E6 :E${i + 5})`)
      .style(style)
      .style({numberFormat: '"￥"#,##0.00_);("￥"#,##0.00)'});
    for (let a = 4; a < i + 9; a++) {
      for (let b = 2; b < 6; b++) {
        ws.cell(a, b)
          .style(wb.createStyle({
            border: {
              left: {style: 'thin'},
              right: {style: 'thin'},
              top: {style: 'thin'},
              bottom: {style: 'thin'},
            }
        }))
      }
    }
  // })
}

module.exports = getExcelDetail;
