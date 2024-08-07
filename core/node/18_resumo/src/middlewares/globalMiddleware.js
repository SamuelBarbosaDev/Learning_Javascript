exports.globalMiddlewares = (request, response, next) =>{
    response.locals.umaVariavelLocal = 'Vou passou pelo Middlewares Global.';
    next();
};

exports.checkCsrfError = (erro, request, response, next) => {
    if(erro && erro.code === 'EBADCSRFTOKEN'){
        response.render('404')
    }
}

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
}