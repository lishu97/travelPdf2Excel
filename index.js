  const fs = require('fs');
  const path = require('path');
  const PDFParser = require("pdf2json");
  const xl = require("excel4node");

  const key2Index = {
    date: 1,
    reason: 2,
    time: 3,
    money: 4,
  };  

  // const pdfParser = new PDFParser();
  // var wb = new xl.Workbook();
  // var ws = wb.addWorksheet('Sheet 1');

  main();

  function main(){
    const inputPath = path.join(__dirname, './pdf');
    const outputPath = path.join(__dirname, './excel');

    // 遍历输入路径下的文件
    fs.readdirSync(inputPath)
      .filter(fileName => fileName !== '.gitkeep')
      .forEach((fileName) => {
        var inputFilePath = path.join(inputPath, fileName);
        var outputFilePath = path.join(outputPath, fileName);
        var [id, name] = fileName.replace(/\.pdf/,"").split('_'); // 解构、赋值 ['凌旺', 'X7778']
        pdf2Excel({inputFilePath, outputFilePath, id, name});
        // 根据遍历结果获取工号、姓名，生成文件输入输出路径，传给pdf2Excel方法
      })
  }

  // pdf2Excel
  // 输入：pdf文件路径、excel文件路径
  // 输出：无
  function pdf2Excel({inputFilePath, outputFilePath, id, name}){
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet('Sheet 1');
    getPdfText(inputFilePath).then(pdfText => {
      const excelData = getExcelDataByPdfText(pdfText, id, name);
      getExcelLayout(wb,ws);
      getExcelHeader(wb, ws, excelData);
      getExcelDetail(wb,ws, excelData);
      wb.write(outputFilePath.replace(/\.pdf/, ".xlsx"));
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // 把pdf中文字提取出来，用连接符拼接成一个长字符串
  /**
   * @description: 
   * @param {*} inputFilePath
   * @return {*}
   */  
  function getPdfText(inputFilePath) {
    const pdfParser = new PDFParser();
    return new Promise((resolve, reject) => {
      pdfParser.on("pdfParser_dataError", errData => reject(errData) );
      pdfParser.on("pdfParser_dataReady", pdfData => {
        const pdfText = pdfData.formImage.Pages.reduce((data, page) => {
            return data + page.Texts.map(item => ({
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

  // 提取结构化后的数据
  /**
   * @description: 
   * @param {*} pdfText
   * @param {*} name
   * @param {*} id
   * @return {*}
   */  
  function getExcelDataByPdfText(pdfText, id, name) {
    const excelData = {
      personInfo :{
        id :'',
        name :''
      },
      title : '',
      arr : '',
    };
    excelData.personInfo = { id, name} ;
    excelData.title = getExcelTitle(pdfText) ;
    excelData.arr = getExcelData(pdfText).arr;
    return excelData;
  }

    // 根据pdf文字长字符串提取title
    function getExcelTitle(pdfText) {
      var yearAndDate = /行程起止日期:(@@)?(\d*)-(\d*)-\d*\s\S\s(\d*)-(\d*)-/g
      var result1 = yearAndDate.exec(pdfText);
      var year,date;
      if(result1[3] == result1[5]){
        year = result1[2]+'年'
        date = result1[3]+'月'
      }else if(result1[2] == result1[4]){
        year = result1[2]+'年'
        date = result1[3]+'-'+result1[5]+'月'
      }else{
        year = result1[2]+'年'+result1[3]+'月-'
        date = result1[4]+'年'+result1[5]+'月'
      }
      return title = year + date + '交通费报销明细'   
    }
  
    // 根据pdf文字长字符串提取行程单第一条记录的年份
    function getExcelStartYear(pdfText) {
      var yearAndDate = /行程起止日期:(@@)?(\d*)-(\d*)-\d*\s\S\s(\d*)-(\d*)-/g
      var result1 = yearAndDate.exec(pdfText);
      return year = result1[2]
    }

  // 根据pdf文字长字符串提取行程单记录的详情
  function getExcelData(pdfText) {
    var reg = /@@(\d{1,2})@@(.*?)@@(\d*-\d*)\s(\d*:\d*)\s(.*?)@@(.*?)@@(.*?)@@(.*?)@@(\d*\.\d*)@@(\d*\.\d*)/g
    var result = reg.exec(pdfText); 
    var arr=[]
    let year = getExcelStartYear(pdfText)
    let lastDate = result[3];
    while(result !== null){
      const [lastMonth, lastDay] = lastDate.split('-');
      const [currentMonth, currentDay] = result[3].split('-');
      if(lastMonth > currentMonth) {
        year++;
        lastDate = `${currentMonth}-${currentDay}`;
      }
      const date = `${year}/${+currentMonth}/${+currentDay}`;
      arr.push({
        date,
        reason: '加班至晚上10点后，无公交',
        time: result[4],
        money: `${+result[10]}`,
      })
      result = reg.exec(pdfText);  
    }
    return { arr }
  }

  // excel布局
  function getExcelLayout(wb,ws) {
    ws.column(1).setWidth(23.25);
    ws.column(2).setWidth(12.25);
    ws.column(3).setWidth(44.88);
    ws.column(4).setWidth(10.75);
    ws.column(5).setWidth(11.25);
    for (let a = 0; a < 100; a++) {
      ws.row(a).setHeight(20);
    }
  }

  // excel标题
  function getExcelHeader(wb, ws,excelData) {
    ws.cell(2,2,2,5,true).string('报销人：' + excelData.personInfo.name +' ' + excelData.personInfo.id);
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
  }

  // excel内容、总计
  function getExcelDetail(wb,ws,excelData) {
    arr = excelData.arr;
    for(var i = 0; i < arr.length; i++) {
      const row = 6 + i;
      for (let key in arr[i]) {
        let detailData = arr[i][key];
        const col = 1 + key2Index[key];
        if ( key !== 'money') {
          ws.cell(row, col).string(detailData).style(wb.createStyle({
            alignment: {
              horizontal: 'center',
              vertical: 'center'
            },
          }))
        }
        ws.cell(row, 5).number(+arr[i][key='money']).style(wb.createStyle({
          alignment: {
            horizontal: 'center',
            vertical: 'center'
          },
          numberFormat: '"￥"#,##0.00_);("￥"#,##0.00)'
        }))
      }
    }
    ws.cell(8+i,4).string('合计').style(wb.createStyle({
      alignment: {
        horizontal: 'center',
        vertical: 'center'
      },
    }))
    ws.cell(8+i,5) .formula(`sum(E6 :E${i+5})`).style(wb.createStyle({
      alignment: {
        horizontal: 'center',
        vertical: 'center'
      },
      numberFormat: '"￥"#,##0.00_);("￥"#,##0.00)'
    }))
    for (let a = 4; a < i+9; a++) {
      for (let b = 2; b < 6; b++) {
        ws.cell(a,b).style(wb.createStyle({
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
  } 