// (condição) ? 'Valor para Verdadeiro' : 'Valor para falso'

const pontuacao = 15;
const nivel_usuario = pontuacao >= 10 ? 'Usuário VIP' : 'Usuário normal';

console.log(`=== ${nivel_usuario} ===`);

// Valor padrão:

const cor = null;
const cor_padrao = cor || 'Preto';

console.log(`=== ${cor_padrao} ===`)