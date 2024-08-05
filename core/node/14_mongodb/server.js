require('dotenv').config()
const express = require('express');
const router = require('./router');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const globalMiddlewares = require('./src/middlewares/globalMiddleware');
const status = 'Base De Dados - Carregada Com sucesso!';

mongoose.connect(process.env.CONNECTIONSTRING)
.then(
    () => {
        app.emit(status);
        console.log(status);
    }
)
.catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// Nosso Middlewares
app.use(globalMiddlewares)
app.use(router);
app.on(status, () => {
    app.listen(3999,
        () => {
            console.log('Acesse o site: http://localhost:3999/')
        }
    );   
});
