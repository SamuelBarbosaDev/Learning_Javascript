function form() {
    const form = document.querySelector('.form');

    function recebeEventoForm(event) {
        event.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const imc = peso.value / (altura.value * altura.value)
        alert(`O seu IMC é: ${imc.toFixed(1)}`);
    };

    form.addEventListener(
        'submit',
        recebeEventoForm
    );
};

form();