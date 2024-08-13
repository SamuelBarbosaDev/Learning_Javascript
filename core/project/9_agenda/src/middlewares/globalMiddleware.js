exports.globalMiddlewares = (request, response, next) =>{
    response.locals.errors = request.flash('errors');
    response.locals.success = request.flash('success');
    response.locals.user = request.session.user;
    next();
};

exports.checkCsrfError = (erro, request, response, next) => {
    if(erro){
        response.render('404')
    }
}

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
}