require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const routes = require("./routes");
const path = require('path');



mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log('Conetado a base de dados MONGODB');
    app.emit('start-database'); // Emitindo um sinal.
}).catch(err => console.error('Erro ocorrido ao iniciar conexão:', err));

app.use(express.urlencoded({
    extended: true
}));

// Importação para conteudos estaticos.
app.use(express.static(path.resolve(__dirname, 'public')));

// Um diretório ou uma matriz[] de diretórios para as views do aplicativo
app.set('views', path.resolve(__dirname, 'src', 'views'));

//Definindo o motor para views -> ejs
app.set('view engine', 'ejs');
app.use(routes);


app.on('start-database', () => { // Capturando sinal emitido para assim iniciar o servidor.
    app.listen(3000, () => {
        console.log(`Server running at link: http://localhost:3000`);
    });
});


