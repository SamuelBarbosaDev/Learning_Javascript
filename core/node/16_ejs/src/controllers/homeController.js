exports.home = (request, response) => {
    request.session.usuario = {nome: 'Fulando de tal', logado: true}
    response.render('index', {
        tituloPagina: 'EJS',
        titulo: 'Estudo sobre <strong style="color: red;">EJS</strong>.',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    })
}