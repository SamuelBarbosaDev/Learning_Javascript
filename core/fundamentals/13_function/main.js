// Funções:

// Qual é o seu nome?
function qual_o_seu_nome(name) {
    return console.log(`O seu nome é ${name}!`)
}

qual_o_seu_nome("Samuel")

// Você sabe somar?
function somar(var_1, var_2) {
    return console.log(
        `O resultado da soma foi: ${var_1 + var_2}`
    )
}

somar(10, 15)

// Qual é a raiz?
const raiz = function (n_1) {
    return (n_1 ** (1/2))
}

console.log(raiz(9))

// Potência:
const potencia = (var_1, var_2) => {
    return var_1 ** var_2
}

console.log(potencia(8, 3))

// Multiplicação:
const mult = (n_1, n_2) => n_1 * n_2

console.log(mult(2, 4))