// 705.484.450-52 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o dígito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2  
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo digito)
*/

// console.log(11 - (237 % 11));
// console.log(77+0+45+32+56+24+20+20+0+10);
// console.log(11 - (284 % 11));

function validaCPF(cpf){
    cpf = cpf.replace(/[.-]/g, '');

    let tamanho_1 = cpf.length + 2;
    let digito_1 = 0;

    for (let i of cpf){
        tamanho_1 -= 1;
        digito_1 += parseInt(i) * tamanho_1
    }

    digito_1 = 11 - (digito_1 % 11)

    cpf += digito_1

    let tamanho_2 = cpf.length + 2;
    let digito_2 = 0;

    for (let i of cpf){
        tamanho_2 -= 1;
        digito_2 += parseInt(i) * tamanho_2
    }

    digito_2 = 11 - (digito_2 % 11)

    cpf += digito_2

    return cpf
}

console.log(validaCPF('705.484.450'));