const getDetail = require('./getDetail');
const getTitle = require('./getTitle');

function transform(data) {
    return Object.keys(data).map(key => {
        const [id, name] = key.split('_');
        const detail = getDetail(data[key]);
        const title = getTitle(detail);
        return {
            id, 
            name,
            title,
            detail: detail.map(item => {
                delete item.moment;
                return item;
            })
        }
    })
};

module.exports = transform;