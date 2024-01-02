// Observação:
console.log('Hello world. Feliz ano novo!!!');

// Execício:
const lista_de_numeros = [1, 2, 3, 5, 6, 7, 8, 9];
const [num_1, num_2, ...resto] = lista_de_numeros;
const juntando_lista = [num_2, resto];

console.log(`Selecionando o primeiro número: ${num_1}`);
console.log(`Selecionando o segundo número: ${num_2}`);
console.log(`Selecionando o restante da lista: ${resto}`);
console.log(`Juntando lista: ${juntando_lista}`);

// Somando lista:
const valores = [1, 2, 4, 77]
function soma(a, b, c) {
    return a + b + c;
}

const resultado = soma(...valores);
console.log(`Somando lista de valores: ${resultado}`); // Deve imprimir 6 (1 + 2 + 3)
