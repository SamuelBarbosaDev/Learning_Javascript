import 'core-js/stable';
import 'regenerator-runtime';
import './assets/css/style.css';
import Login from './module/Login'
import Contact from './module/Contact'


const singUp = new Login(
    'sing-up'
);
const singIn = new Login(
   'sing-in'
);
const contact = new Contact(
    'contact'
)

singUp.init();
singIn.init();
contact.init();