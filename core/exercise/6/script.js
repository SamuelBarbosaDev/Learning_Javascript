function form() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    let pessoas = []

    function recebeEventoForm (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        resultado.innerHTML += `<p>O seu nome é: ${nome.value}</p>`
        resultado.innerHTML += `<p>A sua sobrenome é: ${sobrenome.value}</p>`
        resultado.innerHTML += `<p>O seu peso é: ${peso.value}</p>`
        resultado.innerHTML += `<p>A sua altura é: ${altura.value}</p>`
        
        console.log(pessoas)  
    }


    form.addEventListener(
        'submit',
        recebeEventoForm
    );


};
form();