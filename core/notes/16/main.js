function criaMultiplicador(multiplicador){
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3))
console.log(triplica(3))
console.log(quadruplica(3))

// outra forma:

function criaMultiplicador2(multiplicador){
    return function (n){
        return n * multiplicador;
    }
}
const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadruplica2 = criaMultiplicador(4);

console.log(duplica2(3))
console.log(triplica2(3))
console.log(quadruplica2(3))
