// Grupos:
// ((...))(...)(...)  $1 $2 $3 $4
// Ou lógico: |

const { text } = require("./database");

const regex = /lorem|sit/gi;
console.log(text.match(regex));
console.log(text.replace(regex, "TEXTO ALTERADO"));
console.log(text.replace(regex, function(input){
    return `Zé do cupim - ${input.toUpperCase()} - Zé do cupim`
}));

