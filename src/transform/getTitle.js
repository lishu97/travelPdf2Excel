const moment = require('moment');

function getTitle(detail) {
    // TODO:
    console.log(detail?.[0]?.moment.format('YYYY-MM-DD'), detail?.[detail.length - 1]?.moment.format('YYYY-MM-DD'));
    return '标题'
}
module.exports = getTitle;