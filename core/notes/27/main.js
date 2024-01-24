// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.
const numeros = [5, 50, 80, 1, 2, 3];

const numerosFiltrados = numeros.filter(
    valor => valor > 10
);


console.log(numerosFiltrados)

// Map 
const pessoas = [
    {nome: 'Carla', idade: 34},
    {nome: 'Patrícia', idade: 21},
    {nome: 'Martins', idade: 23},
    {nome: 'Jennifer', idade: 44},
    {nome: 'Pamela', idade: 55},
];

const pessoasComNomeGrade = pessoas.filter(
    obj => obj.nome.length >= 7
)

console.log(pessoasComNomeGrade)


// Map 2
const nomeTerminaComA = pessoas.filter(
    obj => obj.nome.toLowerCase().endsWith('a')
)

console.log(nomeTerminaComA)