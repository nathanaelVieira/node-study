const path = require('path');

const write = require('./FileWriter');
const read = require('./FileReader');











const pathFile = path.resolve(__dirname, '..', 'test.json');

const people = [
    { message: 'text/txt -> file system writer. 💚 learning node.js\n\tauthor: Nathanael L. Vieira' },
    { nome: 'João' },
    { nome: 'Marcia' },
    { nome: 'Valmir' },
    { nome: 'Cleber' },
    { nome: 'Gabriel' },
    { nome: 'Beatriz 🥎' }
];

const peopleJSON = JSON.stringify(people, '', 4); // 4 -> valor para identação

// write(pathFile, peopleJSON, false);

readData(pathFile);


async function readData(pathFile) {
    try {
        const data = await read(pathFile);
        console.log(data);
    } catch (err) {
        throw err;
    }
}

