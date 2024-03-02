const { error } = require('node:console');
const { unlink } = require('node:fs');
const fs = require('node:fs/promises');
const path = require('path');


// (async function (path) {
//     try {
//         await unlink(path, callback);
//         console.log(`Successfully deleted ${path}`);
//     } catch (error) {
//         console.error(`There was an error: ${error.message}`);
//     }
// })('/tmp/hello');


// const pathNodo = path.resolve(__dirname);
// fs.readdir(__dirname)
//     .then(files => console.log(files))
//     .catch(err => console.error(err));



async function readDir(rootDir) {
        rootDir = rootDir || __dirname;
        const files = await fs.readdir(rootDir);
        console.log(files);
        // walk(files, rootDir);
}


async function walk(files, rootDir) {
    for (const file of files) {

        const fileFullPath = path.resolve(rootDir, file); // Caminho completo - concatena
        const stats = await fs.stat(fileFullPath); // Funcionalidades de análise

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;


        if (stats.isDirectory()) {
            readDir(fileFullPath);
            continue;
        }

        console.log(fileFullPath, stats.isDirectory());

    }
}


readDir('C:/workplace/node');

