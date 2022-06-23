const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
// LOGIN DO USUARIO COM BASE NO METODO DO LUIZ - LINK NO DISCORD JWT

module.exports = {

    // LOGIN BASICO COM JWT, DEPOIS INCLUIR A LOGICA DO VIDEO COM O JWT
    async login(request, res) {
        const { email } = request.body;
       
        const user_real = await connection('users')
        .where('email', email)
        .select('email')
        .first();

        if (user_real.email == email){
        const token = jwt.sign({ email }, process.env.SECRET, {
            expiresIn: 300 // EXPIRA EM 5 MIN
        });
        return res.json({ auth: true, token: token });
        }
        
        res.status(500).json({message: 'Login inválido!'});
    }
};
    
    


