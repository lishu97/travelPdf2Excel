const read = require('./src/read');
const transform = require('./src/transform');
const write = require('./src/write');
const reada = read();
reada.then(res => {
    const transforma = transform(res);
    write(transforma)
})
