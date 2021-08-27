const fs = require('fs');
const { join } = require('path');
const pdfParser = require('./pdfParser')
const { INPUT_PATH } = require('../common/path');
function read() {
    return new Promise((resolve, reject) => {
        const pdfTextPromiseMap = fs.readdirSync(INPUT_PATH)
            .filter(fileName => fileName !== '.gitkeep')
            .reduce((map, fileName) => {
                // 文件
                if (fs.statSync(join(INPUT_PATH, fileName)).isFile()) {
                    if (map.has(fileName.split('.')[0])) {
                        map.get(fileName.split('.')[0]).push(pdfParser(join(INPUT_PATH, fileName)));
                    } else {
                        map.set(fileName.split('.')[0], [pdfParser(join(INPUT_PATH, fileName))])
                    }
                }
                // 文件夹
                else {
                    fs.readdirSync(join(INPUT_PATH, fileName))
                        .forEach((childFileName) => {
                            if (map.has(fileName)) {
                                map.get(fileName).push(pdfParser(join(INPUT_PATH, fileName, childFileName)));
                            } else {
                                map.set(fileName, [pdfParser(join(INPUT_PATH, fileName, childFileName))])
                            }
                        })
                }
                return map;
            }, new Map())
        Promise.all(Array.from(pdfTextPromiseMap.values()).flat()).then(async (b) => {
            resolve(await new Promise((resolve) => {
                const result = {};
                pdfTextPromiseMap.forEach((value, key) => {
                    Promise.all(value).then(pdfTexts => {
                        result[key] = pdfTexts;
                        if(Object.keys(result).length === pdfTextPromiseMap.size) {
                            resolve(result)
                        }
                    })
                })
            }))
        })
    })
}
module.exports = read;