const { request, response } = require("express");

exports.mainPage = (request, response) => {
    response.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"><br><br>
            <button>Enviar</button>
        </form>

    `);
};

exports.treatPost = (request, response) => {
    const nameCapt = request.body.nome;
    if (nameCapt)
        response.send(`Valor validado - ${nameCapt}`);
    else
        response.send(`Valor indefinido.`);
};