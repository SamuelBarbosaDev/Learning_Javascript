//
const numeros = [5, 50, 80, 1, 2, 3];

const numerosEmDobro = numeros.map(
    valor => valor * 2
);

console.log(numerosEmDobro)


//
const pessoas = [
    {nome: 'Carla', idade: 34},
    {nome: 'Patrícia', idade: 21},
    {nome: 'Martins', idade: 23},
    {nome: 'Jennifer', idade: 44},
    {nome: 'Pamela', idade: 55},
];

const nomes = pessoas.map(
    obj => obj.nome
)

const idades = pessoas.map(
    obj => ({idade: obj.idade})
)

const comIds = pessoas.map(
    (obj, indice) => {
        const newObj = {...obj};
        newObj.id = indice;
        return newObj;
    }
)

console.log(nomes)
console.log(idades)
console.log(comIds)

