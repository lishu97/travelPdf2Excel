
// excel标题
function getExcelHeader(wb, ws,excelData) {
    var style = wb.createStyle({
      alignment: {
        horizontal: 'center',
        vertical: 'center'
      },
    });
    // excelData.forEach(function (excelData) {
      // console.log(excelData.name);
      ws.cell(2,2,2,5,true).string('报销人：' + excelData.name +' ' + excelData.id);
      ws.cell(4,2,4,5,true).string(excelData.title).style(wb.createStyle({
        font: {
          size:11,
          bold:true,
          name:'等线'
        },
        alignment: {
          horizontal: 'center',
          vertical: 'center'
        },
        fill: {
          type: 'pattern', 
          patternType: 'solid', 
          fgColor: 'f2f2f2', 
        },
      }));
    // })
    ws.cell(5,2).string('日期').style(style);
    ws.cell(5,3).string('事由').style(style);
    ws.cell(5,4).string('上车时间').style(style);
    ws.cell(5,5).string('金额').style(style);
  }

module.exports = getExcelHeader;
