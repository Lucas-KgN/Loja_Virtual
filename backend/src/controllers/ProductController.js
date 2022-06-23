const crypto = require('crypto');
const connection = require('../database/connection');

// Metodos dos produtos
module.exports = {

    // CHAMA TODOS OS PRODUTOS DO BANCO
    async index(request, response) {
        const products = await connection('products').select('*');
    
        return response.json(products);
    },

    // CRIA O PRODUTO NO BANCO COM BASE NOS DADOS PASSADOS NO SITE
    async create(request, response) {
        const { name, value, description } = request.body;
    
       await connection('products').insert({  // Salvando as informacoes no banco
            name,
            value,
            description,
        })
    
        return response.json({ name }); // Exibindo o nome criado para confirmar que deu certo
    },

    // DELETA UM PRODUTO COM BASE NO SEU ID
    async delete(request, response) {
        const {id} = request.params;

        await connection('products').where('id', id).delete();

        return response.status(204).send();
    }
};