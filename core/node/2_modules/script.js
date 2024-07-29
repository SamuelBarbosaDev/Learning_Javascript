const hehehMult = require('./matematica.js');


console.log(hehehMult(4, 3));
console.log(`Nome do arquivo atual:\n${__filename}\n`);
console.log(`Nome da Pasta atual:\n${__dirname}\n`);

const path = require('path').resolve(__dirname, '..');
console.log(`Navegando entre pastas:\n${path}\n`);
