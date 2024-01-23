// Forma 1 de criar um array:
const nomes = ['Eduardo', 'Maria', 'Joana'];

// Forma 2 de criar um array:
const nomes_2 = new Array('Nome 1', 'Nome 2', 'Nome 3');

// Deletando o item de índice 2:
delete nomes[2];
console.log(nomes);

// Deletando o último item:
nomes_2.pop()
console.log(nomes_2);

// Deletando o primeiro item:
nomes.shift()
console.log(nomes);

// Adicionando item ao final:
nomes_2.push('carol')
console.log(nomes_2);

// Adicionando item ao início:
nomes.unshift('luana')
console.log(nomes);

// Selecionando item de um array:
console.log(nomes.slice(0, 2))

// Separando uma string:
const nome = 'nome sobrenome'

console.log(nome.split(' '))