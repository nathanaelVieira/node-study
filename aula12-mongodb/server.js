require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashMessage = require('connect-flash');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

const { checkCRSF, holdingAllRoutes } = require('./src/middlewares/middleware');

// Verificação POST csrf do express
app.use(csrf());
app.use(checkCRSF);
app.use(holdingAllRoutes);
// MIDDLEWARE HELMET
// app.use(helmet());

const routes = require("./routes");

const SEVEN_DAYS = 1000 * 60 * 60 * 24 * 7;


mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log('Conetado a base de dados MONGODB');
    app.emit('start-database'); // Emitindo um sinal.
}).catch(err => console.error('Erro ocorrido ao iniciar conexão:', err));


//#Tópico de Sessions
const sessionOptions = session({
    secret: 'my-secret-dev-vieira',
    // MongoStore serve para diver que as sessões serão salvas no Banco de dados o padrão salva na memória
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_URL }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: SEVEN_DAYS,
        httpOnly: true  //torna um cookie inacessível para scripts do lado do cliente
    }
});

app.use(sessionOptions);
app.use(flashMessage());
// # final Sessions


// Permite transitar paginas completas do servidor
app.use(express.urlencoded({
    extended: true
}));

//Permite transitar dados json do servidor
// app.use(express.json());

// Importação para conteudos estaticos.
app.use(express.static(path.resolve(__dirname, 'public')));

// Um diretório ou uma matriz[] de diretórios para as views do aplicativo
app.set('views', path.resolve(__dirname, 'src', 'views'));

//Definindo o motor para views -> ejs
app.set('view engine', 'ejs');
app.use(routes);

// Inicia conexão após flag 'start-connection'
app.on('start-database', () => { // Capturando sinal emitido para assim iniciar o servidor.
    app.listen(3000, () => {
        console.log(`Server running at link: http://localhost:3000`);
    });
});


