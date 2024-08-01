exports.suNombre = (request, response) => {
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