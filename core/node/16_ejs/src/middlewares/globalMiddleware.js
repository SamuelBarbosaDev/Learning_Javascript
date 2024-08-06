module.exports = (request, response, next) =>{
    response.locals.umaVariavelLocal = 'Vou passou pelo Middlewares Global.';
    next();
};