function mostraHora(){
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR');
};

const timer = setInterval(
    function (){
        console.log(mostraHora());
    },
    1000
);

setTimeout(
    function() {
        clearInterval(timer)
    },
    5000,
)