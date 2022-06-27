const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const OrderController = require('./controllers/OrderController');
const LoginController = require('./controllers/LoginController');

const connection = require('./database/connection');

const routes = express.Router();

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

// USERS
// MOSTRA TODOS OS USUARIOS DO BANCO  COM O JWT INCLUSO
routes.get('/users', UserController.index);
// CHAMA O METODO DO CONTROLLER QUE CADASTRA O USUARIO
routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        address: Joi.string().required()
    })
}), UserController.create);


//PRODUTOS
// MOSTRA TODOS OS PRODUTOS DO BANCO
routes.get('/products', ProductController.index);
// CHAMA O METODO DO CONTROLLER QUE CADASTRA O PRODUTO
routes.post('/products', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        value: Joi.required(),
        description: Joi.string().required()
    })
}), ProductController.create); // ESPECIFICAMENTE SOMENTE PARA O CLIENTE ADMIN QUE CADASTRA PRODUTOS
// DELETA UM PRODUTO COM BASE NO SEU ID
routes.delete('/products/:id', ProductController.delete);

// PEDIDOS
// MOSTRA TODOS OS PEDIDOS DO BANCO
routes.get('/orders', OrderController.index);
// CHAMA O METODO DO CONTROLLER QUE CADASTRA O PEDIDO AO SER FECHADO PELO USUARIO
routes.post('/orders', OrderController.create);


// LOGIN
// FAZ O LOGIN DO USUARIO COM BASE NO ID
routes.post('/login', LoginController.login);

module.exports = routes;

