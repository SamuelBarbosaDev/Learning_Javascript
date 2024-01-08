// Diferentes tipos de `for`:

const frutas = ['maça', 'banana', 'uva', 'abacate', 'melancia']

// 1 - For clássico - Geralmente com iteráveis (array ou strings):
console.log('for (let i = 0; i < frutas.length; i++):');

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// 2 - For in - Retorna o índice ou chave (string, array ou objetos):
console.log('for (let indice in frutas):');

for (let indice in frutas){
    console.log(frutas[indice]);
}

// 3 - For of - Retorna o valor em si (iteráveis, arrays ou strings):
console.log('for (let valor of frutas):');

for (let valor of frutas){
    console.log(valor);
}

// 4
console.log('frutas.forEach:');

frutas.forEach(
    function(valor, indice, array){
        console.log(valor, indice, array);
    }
);
