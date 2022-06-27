const express = require('express');
const routes = require('./routes'); // Referenciar que esta na mesma pasta
const cors = require('cors');
const {errors} = require('celebrate');

const app = express(); // Aplicacao na variavel apps

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());



app.listen(3000); // Porta 3000


