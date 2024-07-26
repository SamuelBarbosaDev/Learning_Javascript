import './assets/css/style.css';
import GeradorDeSenhas from './assets/modules/GeradorDeSenhas.js'


const tagButton = document.getElementsByTagName('button')[0];
const length = document.getElementById('length');
const number = document.getElementById('number');
const uppercase = document.getElementById('number');
const lowercase = document.getElementById('lowercase');
const symbol = document.getElementById('symbol');
const password = document.getElementsByClassName('password')[0]

tagButton.addEventListener(
    'click',
    () => {
        password.innerText = GeradorDeSenhas(
            length.value,
            number.checked,
            uppercase.checked,
            lowercase.checked,
            symbol.checked
        );
    }
)
