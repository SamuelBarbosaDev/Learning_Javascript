// Escreva uma função que recebe 2 números e retorne o maior deles:

// Forma 1:
function maiorNumero(...valores){
    return Math.max(...valores);
};

console.log(maiorNumero(1, 99, 33, 2, 100));

// Forma 2:

const max = (x, y) => x > y ? x : y;

console.log(max(1, 99));
