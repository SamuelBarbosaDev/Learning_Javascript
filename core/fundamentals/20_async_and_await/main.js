function rand(min, max){
    min *= 1000
    max *= 1000
    
    return Math.floor(Math.random() * (max - min) + min)
}

function sistemaWeb(mensagem, tempoDelay){
    return new Promise(
        (resolve, reject) => {

            setTimeout(
                resposta => {
                    // Tratamento do erro
                    if(typeof mensagem !== 'string'){
                        return reject(new Error('Mensagem não é uma string.'))
                    }
                    // Programa em funcionamento
                    resolve(console.log(mensagem))
                }, 
                tempoDelay
            )
        }
    )
}

async function synchronousExecution(){
    try{    
        await sistemaWeb('1° - Conectando ao banco de dados.', rand(1, 3))
        console.log('==== Passo 1 concluído ====')

        await sistemaWeb('2° - Buscando dados na base de dados.', rand(1, 3))
        console.log('==== Passo 2 concluído ====')

        await sistemaWeb('3° - Tratando dados.', rand(1, 3))
        console.log('==== Passo 3 concluído ====')

        await sistemaWeb('4° - Exibindo dados na tela.', rand(1, 3))
        console.log('==== Passo 4 concluído ====')

        // await sistemaWeb(57634, rand(1, 3))
        // console.log('==== Passo Erro proposital 5 concluído ====')
    }
    catch(erro){
        console.log(erro)
    }
}

synchronousExecution()