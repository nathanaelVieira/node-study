const { request, response } = require("express");


let posts = [
    { title: 'Artigo 1', content: 'Conteúdo do artigo 1' },
    { title: 'Artigo 2', content: 'Conteúdo do artigo 2' },
    { title: 'Artigo 3', content: 'Conteúdo do artigo 3' }
];

const title = "@nathanael";

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
    response.render('index', {
        article: posts,
        title
    });
};

exports.treatPost = (request, response) => {
    const nameCapt = request.body.nome;
    if (nameCapt)
        response.send(`Valor validado - ${nameCapt}`);
    else
        response.send(`Valor indefinido.`);

    return response.sendStatus(200);
};