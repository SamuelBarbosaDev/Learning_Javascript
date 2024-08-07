exports.suNombre = (request, response) => {
    // request.session.usuario = {nome: 'Fulando de tal', logado: true}
    // console.log(request.session.usuario)
    response.render('form');
}

exports.formResponse = (request, response) => {
    response.send(`Su nombre es ${request.body.nome}`)
}