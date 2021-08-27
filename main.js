const read = require('./src/read');
const transform = require('./src/transform');
const reada = read();
reada.then(res => {
const transforma = transform(res);
    console.log(transforma)
})
