const moment = require('moment');

// 提取excel表格标题
function getTitle(detail) {
      if(detail?.[0]?.moment.format('MM') == detail?.[detail.length - 1]?.moment.format('MM')){
        year = detail?.[0]?.moment.format('YYYY')+'年'
        date = detail?.[0]?.moment.format('MM')+'月'
      }else if(detail?.[0]?.moment.format('YYYY') == detail?.[detail.length - 1]?.moment.format('YYYY')){
        year = detail?.[0]?.moment.format('YYYY')+'年'
        date =detail?.[0]?.moment.format('MM')+'-'+detail?.[detail.length - 1]?.moment.format('MM')+'月'
      }else{
        year = detail?.[0]?.moment.format('YYYY')+'年'+detail?.[0]?.moment.format('MM')+'月-'
        date = detail?.[detail.length - 1]?.moment.format('YYYY')+'年'+detail?.[detail.length - 1]?.moment.format('MM')+'月'
      }
      return title = year + date + '交通费报销明细'  
}
module.exports = getTitle;