/*
* Execício:
* Altere os valores das variáveis.
* A variável var_a deve receber os valores da variável var_b.
* A variável var_b deve receber os valores da variável var_c.
* A variável var_c deve receber os valores da variável var_a.
*/

// Minha resolução:
console.log('Minha resolução:')

// Definindo variáveis:
let var_a = 'a'; // b
let var_b = 'b'; // c
let var_c = 'c'; // a

// Construíndo a lógica para resolver o problema:
let copo = var_a;
var_a = var_b;
var_b = var_c;
var_c = copo;

// Resultado:
console.log(`var_a: ${var_a}`)
console.log(`var_b: ${var_b}`)
console.log(`var_c: ${var_c}`)

// Resolução do professor:
console.log('Resolução do professor:')

// Definindo variáveis:
let var_1 = 1; // 2
let var_2 = 2; // 3
let var_3 = 3; // 1

// Construíndo a lógica para resolver o problema:
[var_1, var_2, var_3] = [var_2, var_3, var_1]

// Resultado:
console.log(`var_a: ${var_a}`)
console.log(`var_b: ${var_b}`)
console.log(`var_c: ${var_c}`)
