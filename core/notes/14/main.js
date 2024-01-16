// Declaração de função (Function hoisting)
helloWorld();

function helloWorld(){
    console.log('Hello world!');
};

// First-class objects (objetos de primeira classe)
// Function expression
const vida = function(){
    console.log('A vida é muito boa');
};

vida();

// Loucura:
function executaFuncao(funcao){
    funcao();
};

executaFuncao(vida);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow()

// Dentro de um objeto:
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};
obj.falar()