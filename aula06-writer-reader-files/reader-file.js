const fileReader = require('fs');
const path = require('path');


const pathFile = path.resolve(__dirname, '..', 'test.txt');


const content = 'text/txt -> file system writer. 💚 learning node.js\n\tauthor: Nathanael L. Vieira';


// fileReader.writeFile(file, data, options, callback)
/*
    file -> caminho/ diretório.
    data -> dados a serem escritos no arquivo.
    option -> {
        flag -> {
            'w' -> sobreescrita
            'a' -> adiciona/ concatena ao final
            }
        enconding -> padrão de caracateres [padrão utf-8]
    }.

    callback -> função chama ao terminar processo. Famoso callback.
*/

fileReader.writeFile(pathFile, content, {
    flag: 'w',
    encoding: 'utf-8'
}, (err) => {
    if (err) throw err;
    console.log("File created with successfully");
});


