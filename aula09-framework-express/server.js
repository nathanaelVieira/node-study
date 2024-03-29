const express = require('express');
const app = express();
const routes = require("./routes");
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

// Um diretório ou uma matriz[] de diretórios para as views do aplicativo
app.set('views', path.resolve(__dirname, 'src', 'views'));

//
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => {
    console.log(`Server executing in port: 3000`);
    console.log(`Server running at link: http://localhost:3000`);
});

