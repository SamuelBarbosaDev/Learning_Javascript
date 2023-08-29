// Qual dia da semana é hoje?
let dia_da_semana = 6;
let mensagem = '';

switch (dia_da_semana) {
    case 1:
        mensagem = 'Segunda-feira';
        break;

    case 2:
        mensagem = 'Terça-feira';
        break;

    case 3:
        mensagem = 'Quarta-feira';
        break;

    case 4:
        mensagem = 'Quinta-feira';
        break;

    case 5:
        mensagem = 'Sexta-feira';
        break;

    case 6:
        mensagem = 'Sábado';
        break;

    case 7:
        mensagem = 'Domingo';
        break;
    
    default:
        mensagem = 'Dia inválido';
};

console.log(mensagem);