const crypto = require('crypto');
const connection = require('../database/connection');

// Metodos dos pedidos
module.exports = {

    // CHAMA TODOS OS PEDIDOS DO BANCO
    async index(request, response) {
        const orders = await connection('orders').select('*');
    
        return response.json(orders);
    },

    // CRIA O PEDIDO NO BANCO COM BASE NOS DADOS PASSADOS NO SITE
    async create(request, response) {
        const { user_id, value, closed, productsclient } = request.body;
    
       await connection('orders').insert({  // Salvando as informacoes no banco    
            user_id,
            value,
            closed,
            productsclient,
        })

        return response.status(204).send()
    }
};