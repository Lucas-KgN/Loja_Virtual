const crypto = require('crypto');
const connection = require('../database/connection');

// Metodos dos usuarios
module.exports = {

    // CHAMA TODOS OS USUARIOS DO BANCO
    async index(request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    // CRIA O USUARIO NO BANCO COM BASE NOS DADOS PASSADOS NO SITE
    async create(request, response) {
        const { name, email, address } = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); // CRIANDO O ID DO USUARIO NA MAO
        let type = 0;

        if (email.indexOf("@admin.com") !== -1){
            type = 1;
        }

       await connection('users').insert({  // Salvando as informacoes no banco
            id,
            name,
            email,
            address,
            type,
        })
    
        return response.json({ id }); // Exibindo o ID criado para confirmar que deu certo
    }
};