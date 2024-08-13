const Login = require('../models/LoginModel')

exports.index = (request, response) => {
    response.render('login');
}

exports.singUp = async (request, response) => {
    try{
        const login = new Login(request.body);
        await login.register();
        if(login.errors.length > 0){
            request.flash('errors', login.errors);
            request.session.save(function(){
                return response.redirect('/login');
            });
            return;
        }

        request.flash('success', 'Usuário criando com sucesso.');
        request.session.save(() => {
            return response.redirect('/login');
        })
    }
    catch(e){
        console.log(e);
        response.render('404');
    }
};

exports.singIn = async (request, response) => {
    try{
        const login = new Login(request.body);
        await login.login();

        if(login.errors.length > 0){
            request.flash('errors', login.errors);
            request.session.save(() => {
                return response.redirect('/login')
            });
            return;
        }

        request.flash('success', `Seja bem-vindo ${login.user.email}`)
        request.session.user = login.user;
        request.session.save(() => {
            return response.redirect('/login')
        })
    }
    catch(e){
        console.log(e);
        return response.render('404');
    }
}

exports.logout = (request, response) => {
    request.session.destroy();
    response.redirect('/');
};