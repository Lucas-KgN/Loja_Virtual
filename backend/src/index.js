const express = require('express');
const routes = require('./routes'); // Referenciar que esta na mesma pasta

const app = express(); // Aplicacao na variavel apps

app.use(express.json());
app.use(routes);



app.listen(3000); // Porta 3000


