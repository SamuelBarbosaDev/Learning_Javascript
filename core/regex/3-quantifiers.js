// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

const { files } = require("./database");

const regex = /\.(jp(e)?g)/gi;

for (const file of files) {
    const valid = file.match(regex);
    console.log(file, valid)
}
