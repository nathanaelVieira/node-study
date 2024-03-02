const sum = require('./module02');

const mod = require('./module01').explanationInformation;
// mod();


const valor = sum(2, 2);
console.log(valor);

console.log(__filename);
console.log(__dirname);
