// Mais sobre números:

let num1 = 10.25;
let num2 = 2.5;

console.log(num1.toString() + num2);
num1 = num1.toString();
console.log(num1.toString(2));
// console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
let temp = num1 * 'olá';
console.log(Number.isNaN(temp));