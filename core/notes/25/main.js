const nomes = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];
const removidos = nomes.splice(-2, 1);
console.log(nomes, removidos);

// Curiosidade:
console.log(Number.MAX_VALUE);

// pop:
const nomes2 = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];
const removidos2 = nomes2.splice(-1, 1);
console.log(nomes2, removidos2);

// shift:
const nomes3 = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];
const removidos3 = nomes3.splice(0, 1);
console.log(nomes3, removidos3);

// push:
const nomes4 = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];
const push = nomes4.splice(nomes4.length, 0, 'carol');
console.log(nomes4, push);

// push- início:
const nomes5 = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];
const push2 = nomes5.splice(0, 0, 'carol');
console.log(nomes5, push2);

// unshift:
const nomes6 = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];
const unshift = nomes6.splice(0, 0, 'carol');
console.log(nomes6, unshift);