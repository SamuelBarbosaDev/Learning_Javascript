const path = require('path');
const caminhoDoArquivo = path.resolve(__dirname, 'heheheh.txt');
const escrevendoArquivos = require('./modules/write.js');
const lendoArquivos = require('./modules/read.js');

// Criando arquivo
escrevendoArquivos(caminhoDoArquivo, '---Conteúdo do arquivo---')

// Lendo arquivo
lendoArquivos(caminhoDoArquivo)
.then(dados => console.log(dados))
.catch(e => console.warn(e))
