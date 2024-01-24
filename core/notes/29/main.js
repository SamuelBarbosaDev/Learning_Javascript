// Some todos os números (Reduce)
// Retorne um array com os pares (Filtes)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3];

const pessoas = [
    {nome: 'Carla', idade: 34},
    {nome: 'Patrícia', idade: 21},
    {nome: 'Martins', idade: 23},
    {nome: 'Jennifer', idade: 44},
    {nome: 'Pamela', idade: 55},
];

// 

const total = numeros.reduce(
    (acumulador, valor) => acumulador+=valor
)


const pares = numeros.reduce(
    (acumulador, valor) => valor % 2 === 0 ? [...acumulador, valor] : acumulador,
    []
)

const dobro = numeros.reduce(
    (acumulador, valor) => {
        acumulador.push(valor * 2);
        return acumulador;
    },
    []
)

const maisVelha = pessoas.reduce(
    (acumulador, valor) => acumulador.idade > valor.idade ? acumulador : valor
)

console.log(total)
console.log(pares)
console.log(dobro)
console.log(maisVelha)

