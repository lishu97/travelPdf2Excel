const xl = require("excel4node");
const path = require('path');
const chalk = require('chalk');
const { OUTPUT_PATH } = require('../common/path');
const getExcelLayout = require('./excelLayout')
const getExcelHeader = require('./excelHeader')
const getExcelDetail = require('./excelDetail')

function writeExcel(outputFilePath, excelData){
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet('Sheet 1');
    getExcelLayout(ws);
    getExcelHeader(wb, ws,excelData);
    getExcelDetail(wb,ws, excelData);
    wb.write(outputFilePath);
}

function write(excelDatas) {
    excelDatas.forEach(function(excelData){
        writeExcel(path.join(OUTPUT_PATH, `/${excelData.id }_${excelData.name}.xlsx`), excelData);
    })
    console.log(`
    
    EXCEL生成成功：${chalk.green(OUTPUT_PATH)}
    
    `);
}

module.exports = write;
