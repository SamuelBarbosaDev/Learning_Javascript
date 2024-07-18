function rand(min, max){
    min *= 1000
    max *= 1000
    
    return Math.floor(Math.random() * (max - min) + min)
}

function sistemaWeb(mensagem, tempoDelay){
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    // Tratamento do erro
                    if(typeof mensagem !== 'string'){
                        return reject(new Error('Mensagem não é uma string.'))
                    }
                    // Programa em funcionamento
                    console.log(mensagem)
                    resolve(mensagem)
                }, 
                tempoDelay
            )
        }
    )
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    'String 1',
    sistemaWeb('PROMISE 1', rand(1, 3)),
    sistemaWeb('PROMISE 2', rand(1, 3)),
    sistemaWeb('PROMISE 3', rand(1, 3)),
    // sistemaWeb(2222, 4000),
    'Outro valor'
]

Promise.all(promises)
.then(
    function (valor){console.log(valor)}
)
.catch(
    erro => console.log(erro)
)

// Promise.race(promises)
// .then(
//     function (valor){console.log(valor)}
// )
// .catch(
//     erro => console.log(erro)
// )