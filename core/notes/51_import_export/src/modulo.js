const nome = 'Carlinhos';
export const idade = 54;
let peso = 84.15;

function yearOldX2(year_old){
    return year_old * 2
};

function nomeQualquer(){
    console.log('Eu sou o padrão. HeHeHeHeHeHeH')
};

export default () => {console.log('Eu sou o padrão. HeHeHeHeHeHeH 222')};

export {nome as nomeAltera, yearOldX2, peso} //, nomeQualquer as default}