const fileReader = require('fs');

/** 
 * @param {Path} path 
 * @param {String} content 
 * @param {Boolean} rewrite 
 */
module.exports = (path, content, rewrite) => {

    fileReader.writeFile(path, content, {
        flag: rewrite ? 'w' : 'a',
        encoding: 'utf-8'
    }, (err) => {
        if (err) throw err;
        console.log("File created with successfully");
    });
}

