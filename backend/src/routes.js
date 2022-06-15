const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const OrderController = require('./controllers/OrderController');

const connection = require('./database/connection');

const routes = express.Router();

// USERS
// MOSTRA TODOS OS USUARIOS DO BANCO
routes.get('/users', UserController.index);
// CHAMA O METODO DO CONTROLLER QUE CADASTRA O USUARIO
routes.post('/users', UserController.create);


//PRODUTOS
// MOSTRA TODOS OS PRODUTOS DO BANCO
routes.get('/products', ProductController.index);
// CHAMA O METODO DO CONTROLLER QUE CADASTRA O PRODUTO
routes.post('/products', ProductController.create); // ESPECIFICAMENTE SOMENTE PARA O CLIENTE ADMIN QUE CADASTRA PRODUTOS
// DELETA UM PRODUTO COM BASE NO SEU ID
routes.delete('/products/:id', ProductController.delete);

// PEDIDOS
// MOSTRA TODOS OS PEDIDOS DO BANCO
routes.get('/orders', OrderController.index);
// CHAMA O METODO DO CONTROLLER QUE CADASTRA O PEDIDO AO SER FECHADO PELO USUARIO
routes.post('/orders', OrderController.create);

module.exports = routes;
