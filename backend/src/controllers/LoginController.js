const connection = require('../database/connection');
// const jwt = require('jsonwebtoken');

module.exports = {


    async login(request, res) {
        const { id } = request.body;
       
        const user_real = await connection('users')
        .where('id', id)
        .select('type')
        .first();

        // if (user_real.email == email){
        // const token = jwt.sign({ email }, process.env.SECRET, {
        //     expiresIn: 300 // EXPIRA EM 5 MIN
        // });
        // return res.json({ auth: true, token: token });
        // }

        return res.json(user_real);
    }
};
    
    


