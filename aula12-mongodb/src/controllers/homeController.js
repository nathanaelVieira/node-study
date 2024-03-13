const { request, response } = require("express");

const HomeModel = require('../models/Home');

const Person = require('../models/Person');


Person.create({
    name: 'Nathanael L. Vieira',
    email: 'UM_DEV_MUITO_PUTO@outlook.com', // Puxando caso de UpperCase 
    idade: 25
}).then(response => console.log(response))
    .catch(err => console.error(err));

HomeModel.create({
    titulo: 'Criando modelo mongodb.js',
    descricao: 'Descrição variante'
})
    .then(data => console.log(data))
    .catch(err => console.error(err));




exports.mainPage = (request, response) => {

    /**
     * O método {render} do Express é usado para renderizar uma view com dados 
     * fornecidos como argumentos. Ele recebe três argumentos: o primeiro é 
     * o nome da view, o segundo é um objeto que contém as variáveis que serão
     * usadas na view e o terceiro é um callback function que será chamado 
     * quando a renderização estiver concluída.
     * 
     * 
     *  router.renderFile(nameView, objOptions, function(err, str){
     *      //string de html aqui <% %> 
     *  }
     * 
     */
    response.render('index');
};

exports.treatPost = (request, response) => {
    const nameCapt = request.body.nome;
    if (nameCapt)
        response.send(`Valor validado - ${nameCapt}`);
    else
        response.send(`Valor indefinido.`);

    return response.sendStatus(200);
};