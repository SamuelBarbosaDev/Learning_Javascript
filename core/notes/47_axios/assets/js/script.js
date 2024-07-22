axios('assets/js/pessoas.json')
.then(
    json => criaTabela(json.data)
)

function criaTabela(json){
    const mainContent = document.querySelector('.main-content > div')
    const tabela = document.createElement('table')
    const tagTrHead = document.createElement('tr')
    

    const head = ["nome","email","salario","estado","empresa","idade","sexo","cpf"]

    head.forEach(
        chave => {
            const tagTh = document.createElement('th')
            tagTh.innerText = chave
            tagTrHead.appendChild(tagTh)
        }
    )

    tabela.appendChild(tagTrHead)

    
    for (let pessoa of json){
        const tagTr = document.createElement('tr')
        
        for (let chave in pessoa){
            const tagTd = document.createElement('td')

            tagTd.innerText = pessoa[chave]
            tagTr.appendChild(tagTd)
        }
        tabela.appendChild(tagTr)
    }

    mainContent.appendChild(tabela)

}

// fetch('assets/js/pessoas.json')
// .then(
//     resposta => resposta.json()
// )
// .then(
//     json => criaTabela(json)
// )