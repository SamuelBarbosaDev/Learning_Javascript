exports.home = (request, response) => {
    request.session.usuario = {nome: 'Fulando de tal', logado: true}
    response.render('index')
}