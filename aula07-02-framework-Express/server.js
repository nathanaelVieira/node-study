const express = require('express');
const app = express();


/** 
 * Pesquisei na documentação -> https://expressjs.com/pt-br/guide/using-middleware.html
 * 
 * middleware -> funções que trabalham a nivel de nuvem, responsaveis pela manutenção 
 *              e limpeza do trafego realizado. 
 * */


// Função é invocada a cada solicitação para o aplicativo.
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (request, response) => {
    response.send('Hello world, I\'m on the server with node.js - 💚');
});


/**
 * 
 * https://meusite.com.br/perfis/2342ds3?nome=nathanel&nome_negocio=devjr
 * 
 * ? -> inicia uma query string ( consulta)
 * & -> recorte para query
 */


app.get('/test/:id_user?/:nickName?', (require, response) => {

    /**
     * Padrão usado para inserir paramentros de link em rotas:
     * 
     *      :nome_parametro
     *      :nome_parametro? -> ? para ser opcional
     *  
     */
    response.send(`Parametro passado: ${JSON.stringify(require.params)}`);
});



// Treinando o query
app.get('/query:args?', (req, res) => {
    const queryCreated = req.query;
    const { lastname } = queryCreated;
    console.log(queryCreated);

    res.send(`Query pratice 💚 -> ${lastname}`);
});



app.listen(3000, () => {
    console.log(`Server executing in port: 3000`);
    console.log(`Server running at link: http://localhost:3000`);
});