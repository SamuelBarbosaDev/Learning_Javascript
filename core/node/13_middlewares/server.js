const express = require('express');
const router = require('./router');
const app = express();
const path = require('path');
const globalMiddlewares = require('./src/middlewares/globalMiddleware')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// Nosso Middlewares
app.use(globalMiddlewares)
app.use(router);

app.listen(3999,
    () => {
        console.log('Acesse o site: http://localhost:3999/')
    }
);