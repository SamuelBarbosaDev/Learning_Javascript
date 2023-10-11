function form() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(event) {
        event.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const imc = peso.value / (altura.value * altura.value)
        let status_imc = NaN

        if (imc < 18.5){
            status_imc = 'Abaixo do peso'
        }
        else if ((imc > 18.5) && (imc <= 24.0)){
            status_imc = 'Peso normal'
        }
        else if ((imc >= 25) && (imc <= 29.9)){
            status_imc = 'Sobrepeso'
        }
        else if ((imc >= 30) && (imc <= 34.9)){
            status_imc = 'Obesidade grau 1'
        }
        else if ((imc >= 35) && (imc <= 39.9)){
            status_imc = 'Obesidade grau 2'
        }
        else if (imc > 40){
            status_imc = 'Obesidade grau 3'
        }
        else {
            status_imc = 'Desconhecido'
        }
        
        resultado.innerHTML = `<p>O seu IMC é: <strong>${imc.toFixed(1)}</strong> - <strong>${status_imc}</strong></p>`
    };

    form.addEventListener(
        'submit',
        recebeEventoForm
    );
};

form();