const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const numberGenerator = () => String.fromCharCode(random(49, 57));

const uppercaseGenerator = () => String.fromCharCode(random(65, 90));

const lowercaseGenerator = () => String.fromCharCode(random(97, 122));

const symbolGenerator = () => {
    const symbol = '!@#$%^&*()_+[]{}|;:",.<>?`~'
    return symbol[random(0, symbol.length)];
}


export default function GeradorDeSenhas(tamanho, number, uppercase, lowercase, symbol){
    let password= [];

    for (let i = 0; i <= tamanho; i++){
        number && password.push(numberGenerator());
        uppercase && password.push(uppercaseGenerator());
        lowercase && password.push(lowercaseGenerator());
        symbol && password.push(symbolGenerator());
    }

    return password.join('').slice(0, tamanho);
};