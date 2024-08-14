require('dotenv').config()
const express = require('express');
const router = require('./router');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { globalMiddlewares, checkCsrfError, csrfMiddleware } = require('./src/middlewares/globalMiddleware');
const status = 'Base De Dados - Carregada Com sucesso!';
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');


mongoose.connect(process.env.CONNECTIONSTRING)
.then(
    () => {
        app.emit(status);
    }
)
.catch(e => console.log(e));

app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOption = session({
    secret: '1234t6535reg1236sf7asdf8',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOption);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(csrf());
// Nosso Middlewares
app.use(globalMiddlewares);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(router);
app.on(status, () => {
    app.listen(3999,
        () => {
            console.log('Acesse o site: http://localhost:3999/')
        }
    );
});
