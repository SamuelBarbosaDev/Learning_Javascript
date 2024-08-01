const express = require('express');
const router = require('./router');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(router);

app.listen(3999,
    () => {
        console.log('Acesse o site: http://localhost:3999/')
    }
);