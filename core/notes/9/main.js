// Estudo sobre While:
// While executar o loop enquanto a condição for verdadeira.
function randomNumber(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
};

let number = randomNumber(1, 50);

while (number !== 10){
    console.log(number);
    number = randomNumber(1, 50);
}