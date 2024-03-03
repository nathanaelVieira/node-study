const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Hello world, I\'m on the server with node.js 💚');
});


app.get('/contact', (request, response) => {
    response.send('<h1>Contatos</h1><p><b>name:</b> Nathanael Dev ⚫</p>');
});


app.listen(3000, () => {
    console.log(`Server executing in port: 3000`);
    console.log(`Server running at link: http://localhost:3000`);
});