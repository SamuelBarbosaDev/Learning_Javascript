import './assets/css/style.css';
import GeradorDeCPF from './assets/modules/GeradorDeCPF.js'


const btnGeraCPF = document.getElementById('btn-gera-cpf');
const idCPF = document.getElementsByClassName('cpf')[0];

btnGeraCPF.addEventListener(
    'click',
    e => {
        const geradorDeCPF = new GeradorDeCPF()
        const cpf = geradorDeCPF.padronizaCPF()
        idCPF.innerText = cpf;
    }
)