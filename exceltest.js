// Require library
var xl = require('excel4node');
 
// Create a new instance of a Workbook class
var wb = new xl.Workbook();
 
// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');

ws.column(1).setWidth(23.25);
ws.column(2).setWidth(12.25);
ws.column(3).setWidth(44.88);
ws.column(4).setWidth(10.75);
ws.column(5).setWidth(11.25);
for (let a = 0; a < 100; a++) {
    ws.row(a).setHeight(20);
}
for (let i = 4; i < 21; i++) {
    for (let j = 2; j < 6; j++) {
        ws.cell(i,j).style(wb.createStyle({
            border: {
                left: {
                    style: 'thin'
                },
                right: {
                    style: 'thin'
                },
                top: {
                    style: 'thin'
                },
                bottom: {
                    style: 'thin'
                },
            }
        }))   
    }
}


ws.cell(2,2,2,5,true).string('报销人：徐世炀 X7777');
ws.cell(4,2,4,5,true).string('2021年8月交通费报销明细').style(wb.createStyle({
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
        fgColor: 'D8E4BC', 
    },
  }));
  ws.cell(5,2).string('日期').style(wb.createStyle({
    alignment: {
        horizontal: 'center',
        vertical: 'center'
    },
  }));
  ws.cell(5,3).string('事由').style(wb.createStyle({
    alignment: {
        horizontal: 'center',
        vertical: 'center'
    },
  }));

  ws.cell(5,4).string('上车时间').style(wb.createStyle({
    alignment: {
        horizontal: 'center',
        vertical: 'center'
    },
  }));
  ws.cell(5,5).string('金额').style(wb.createStyle({
    alignment: {
        horizontal: 'center',
        vertical: 'center'
    },
  }));

wb.write('Excel.xlsx');