exports.suNombre = (request, response) => {
    // request.session.usuario = {nome: 'Fulando de tal', logado: true}
    // console.log(request.session.usuario)
    response.send(
        `
            <form action="/form" method="POST">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome">
                <button>Enviar</button>
            </form>
        `
    );
}

exports.formResponse = (request, response) => {
    response.send(`Su nombre es ${request.body.nome}`)
}