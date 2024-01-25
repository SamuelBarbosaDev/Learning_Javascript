// Retorne a soma do dobro de todos os pares
// => Filtrar pares
// => Dobrar os valores
// => Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3];

const pessoas = [
    {nome: 'Carla', idade: 34},
    {nome: 'Patrícia', idade: 21},
    {nome: 'Martins', idade: 23},
    {nome: 'Jennifer', idade: 44},
    {nome: 'Pamela', idade: 55},
];

// 
const numerosPares = numeros.filter(
    valor => valor % 2 === 0 ? valor : false,
)

const dobroPares = numerosPares.map(
    obj => obj * 2,
)

const somaDosParesDobrados = dobroPares.reduce(
    (acumulador, valor) => acumulador += valor,
)

console.log(numerosPares)
console.log(dobroPares)
console.log(somaDosParesDobrados)

