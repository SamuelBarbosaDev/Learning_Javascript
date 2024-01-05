// Execício:

function insertContent(){
    let content_principal = document.querySelector('.content-principal');
    let div = document.createElement('div')

    const elementos = [
        {tag: 'p', texto: 'frase 1'},
        {tag: 'div', texto: 'frase 2'},
        {tag: 'section', texto: 'frase  3'},
        {tag: 'footer', texto: 'frase 4'},
    ];

    for (let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i]
        let content = document.createElement(tag)
        content.textContent += texto

        div.appendChild(content)
    };

    content_principal.appendChild(div)
};

insertContent();