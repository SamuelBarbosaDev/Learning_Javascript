// g - global (encontra todas as ocorrências)
// i - insensitive (maiúsculo é minúsculo)
// () - grupos
// | - ou

const { text } = require("./database");
const regex = /(Lorem)( ipsum)/i;
const estudoTest = regex.test(text)
const estudoExec = regex.exec(text)

console.log(estudoTest);
console.log(estudoExec);
