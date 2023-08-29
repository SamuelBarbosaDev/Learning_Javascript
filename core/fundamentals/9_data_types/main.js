let variavelNaoAtribuida;
const idUnico = Symbol("id");
const numeroGrande = 1234567890123456789012345678901234567890n;

console.log(typeof(20))
console.log(typeof(20.5))
console.log(typeof('Samuel'))
console.log(typeof(true))
console.log(typeof(false))
console.log(typeof(null))
console.log(typeof(variavelNaoAtribuida))
console.log(typeof(idUnico))
console.log(typeof(numeroGrande))
console.log(
    typeof(
        {
            nome: "João",
            idade: 30
        }
    )
)
console.log(typeof([1, 2, 3, 4, 5]))
console.log(
    typeof(
        function saudacao(nome) {
            return `Olá, ${nome}!`;
        }
    )
)
console.log(typeof(/pattern/))