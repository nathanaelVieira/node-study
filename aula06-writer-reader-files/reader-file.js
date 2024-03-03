const fileReader = require('fs');
const path = require('path');

const pathFile = path.resolve(__dirname, '..', 'test.json');

const people = [
    { message: 'text/txt -> file system writer. 💚 learning node.js\n\tauthor: Nathanael L. Vieira' },
    { nome: 'João' },
    { nome: 'Marcia' },
    { nome: 'Valmir' },
    { nome: 'Cleber' },
    { nome: 'Gabriel' },
    { nome: 'Beatriz dona encrenca 💌' }
];

const peopleJSON = JSON.stringify(people, '', 4); // 4 -> valor para identação


fileReader.writeFile(pathFile, peopleJSON, {
    flag: 'w',
    encoding: 'utf-8'
}, (err) => {
    if (err) throw err;
    console.log("File created with successfully");
});
