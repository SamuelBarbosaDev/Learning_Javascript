const express = require('express');
const app = express()

//          CRIAR,  LER,    ATUALIZAR,  APAGAR
// CRUD ->  CREATE, READ,   UPDATE,     DELETE
//          POST,   GET,    PUT,        DELETE

// https://meusite.com/ <- GET -> Página entregue /
// https://meusite.com/sobre <- GET -> Página entregue /sobre
// https://meusite.com/contato <- GET -> Página entregue /contato

app.get(
    '/',
    (request, response) => {
        response.send('Hello World!');
    }
)

app.get(
    '/contato',
    (request, response) => {
        response.send(
            `
                <form action="/contato" method="POST">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome">
                    <button>Enviar</button>
                </form>
            `
        );
    }
)

app.post(
    '/contato',
    (request, response) => {
        response.send('Formulário Enviado.')
    }
)

app.listen(3999,
    () => {
        console.log('Acesse o site: http://localhost:3999/')
    }
);