const fileSystem = require('fs').promises;

module.exports = (path) => fileSystem.readFile(path, 'utf8');