const { request, response } = require("express");

const HomeModel = require('../models/Home');

const Person = require('../models/Person');

// Person.create({
//     name: 'Nathanael L. Vieira',
//     email: 'UM_DEV_MUITO_PUTO@outlook.com', // Puxando caso de UpperCase 
//     idade: 25
// })
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// HomeModel.create({
//     titulo: 'Criando modelo mongodb.js',
//     descricao: 'Descrição variante'
// })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


exports.mainPage = (request, response) => {

    // request.session.usuario = 'PC-Vieira';
    response.render('index', {
        titulo: 'titulo da página',
        numeros: [1, 2, 3, 4, 5]
    });
    // return;
};

exports.treatPost = (request, response) => {
    const nameCapt = request.body.nome;
    if (nameCapt)
        response.send(`Valor validado - ${nameCapt}`);
    else
        response.send(`Valor indefinido.`);

    return response.sendStatus(200);
};