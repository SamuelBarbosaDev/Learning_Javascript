
function carregaResultado(response){
    const resultado = document.getElementsByTagName('div')[0]
    resultado.innerHTML = response;
}

async function carregaPagina(elemento){
    try{
        const href = elemento.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('Página não encontrada.')

        const html = await response.text()
        carregaResultado(html);
    }
    catch(erro){
        console.warn(erro)
    }
}

document.addEventListener(
    'click',
    e => {
        const elemento = e.target;
        const tag = elemento.tagName.toLowerCase();

        if (tag === 'a'){
            e.preventDefault();
            carregaPagina(elemento)
        }
    }
)