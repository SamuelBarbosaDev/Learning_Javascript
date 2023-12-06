/*
link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/ 

// Primeira Data:
const date = new Date(0);
const date_string = date.toString();

console.log(date);
console.log(date_string);

// Segunda 
const dia = date.getDate()
const mes = date.getMonth() + 1
const ano = date.getFullYear() + 1
const hora = date.getHours()
const min = date.getMinutes()
const seg = date.getSeconds()
const ms = date.getMilliseconds()
const dia_da_semana = date.getDay()

console.log('dia', dia)
console.log('mês', mes)
console.log('ano', ano)
console.log('hora', hora)
console.log('minuto', min)
console.log('segundo', seg)
console.log('Milesegundo', ms)
console.log('Dia da Semana', dia_da_semana)