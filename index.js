require('./db/mongoose');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routeUser = require('./routes/user');
app.use('/api',routeUser);

app.listen(8080, () => {
    console.log('started');
});