const express = require('express');
const router = require('./router');
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3999,
    () => {
        console.log('Acesse o site: http://localhost:3999/')
    }
);