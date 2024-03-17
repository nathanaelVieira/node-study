exports.middlewareGlobal = (req, res, next) => {
    res.locals.oneVariableLocale = 'Este é o valor da variavel local';

    next();
};

exports.otherMiddleware = (req, res, next) => {
    next();
};


exports.checkCRSF = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('Erro CSRF');
    }
    next();
};


exports.holdingAllRoutes = (req, res, next) => {
    // crsfToken() -> responsavel em criar token unicos para todo formulário

    //<input type="hidden" name="_crsf" value="<% crsfToken %>">
    // é preciso que a cada formulario você utilize este input
    res.locals.csrfToken = req.csrfToken;
    next();
};