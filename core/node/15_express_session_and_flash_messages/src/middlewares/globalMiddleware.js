module.exports = (request, response, next) =>{
    console.log('Vou passou pelo Middlewares Global.');
    next();
};