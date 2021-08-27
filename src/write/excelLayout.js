const xl = require("excel4node");
  

  // excel布局
  function getExcelLayout(ws) {
    ws.column(1).setWidth(23.25);
    ws.column(2).setWidth(12.25);
    ws.column(3).setWidth(44.88);
    ws.column(4).setWidth(10.75);
    ws.column(5).setWidth(11.25);
    for (let a = 0; a < 100; a++) {
      ws.row(a).setHeight(20);
    }
  }

module.exports = getExcelLayout;
