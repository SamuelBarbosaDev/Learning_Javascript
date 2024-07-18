function rand(min, max){
    min *= 1000
    max *= 1000
    
    return Math.floor(Math.random() * (max - min) + min)
}

function sistemaWeb(mensagem, tempoDelay){
    return new Promise(
        (resolve, reject) => {
            // Tratamento do erro
            if(typeof mensagem !== 'string'){
                return reject(new Error('Mensagem não é uma string.'))
            }
            // Programa em funcionamento
            setTimeout(
                resposta => resolve(console.log(mensagem)), 
                tempoDelay
            )
        }
    )
}

sistemaWeb('1° - Conectando ao banco de dados.', rand(1, 3))
.then(
    () => {
        console.log('==== Passo 1 concluído ====')
        return sistemaWeb('2° - Buscando dados na base de dados.', rand(1, 3))
    }
)
.then(
    () => {
        console.log('==== Passo 2 concluído ====')
        return sistemaWeb('3° - Tratando dados.', rand(1, 3))
    }
)
.then(
    () => {
        console.log('==== Passo 3 concluído ====')
        return sistemaWeb('4° - Exibindo dados na tela.', rand(1, 3))
    }
)
.then(
    () => {
        console.log('==== Passo 4 concluído ====')
        return sistemaWeb(1616, rand(1, 3))
    }
)
.catch(
    erro => {
        console.log(erro)
    }
)