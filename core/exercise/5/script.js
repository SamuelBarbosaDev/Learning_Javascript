const numero = Number(prompt('Digite um número: '));
const numero_titulo = document.getElementById('numero_titulo');
const texto = document.getElementById('texto')


numero_titulo.innerHTML = numero;
texto.innerHTML = `O seu número + 2 é: ${numero + 2}`
texto.innerHTML += `<p>Raiz quadrada: ${(numero * (1/2))}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>${numero} é NaN: ${isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`


/*
Raiz quadrada: 7.32
${numero} é inteiro: false
É NaN: false
Arredondando para baixo: 55
Arredondando para cima: 56
Com duas casas decimais: 55.20
*/

