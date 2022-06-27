const connection = require('../database/connection');
const jwt = require('jsonwebtoken');

module.exports = {


    async login(request, res) {
        const { id } = request.body;
       
        const user_real = await connection('users')
        .where('id', id)
        .select('type')
        .first();

        try {
            if (user_real.id === id){
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 900 // EXPIRA EM 5 MIN
                });
                return res.json({ auth: true, token: token });
                }
        } catch {
            console.log('Insira seu ID por favor!');
        }
       

        return res.json(user_real);
    }
};
    
    


