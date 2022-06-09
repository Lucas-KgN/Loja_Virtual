const express = require('express');

const app = express(); // Aplicacao na variavel apps

app.use(express.json());


app.post('/users', (request, response) => {  // Método Get para exibir o JSON
    const body = request.body;  // Traz as informacoes da tela do request

    console.log(body);

    return response.json({
        print: 'Projeto Final',
        alunos: 'Lucas Oliveira e Leticia'
    })
})

app.listen(3000); // Porta 3000


