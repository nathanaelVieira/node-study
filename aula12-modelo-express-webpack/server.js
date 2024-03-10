const express = require('express');
const app = express();
const routes = require("./routes");
const path = require('path');

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

app.listen(3000, () => {
    console.log(`Server running at link: http://localhost:3000`);
});

