import 'core-js/stable';
import 'regenerator-runtime';
import './assets/css/style.css';
import Login from './module/Login'


const singUp = new Login(
    'sing-up'
);
const singIn = new Login(
   'sing-in'
);

singUp.init();
singIn.init();
