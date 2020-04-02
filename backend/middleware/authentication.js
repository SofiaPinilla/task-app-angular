const jwt = require('jsonwebtoken');
const { User, Token } = require('../models/index');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];
const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization; //sacamos el token de los headers
        const payload = jwt.verify(token, jwt_secret); //sacamos el payload del token
        const user = await User.findByPk(payload.id); //buscamos el usuario en la base de datos con el id del payload
        // const tokenFound = await Token.findOne({
        //     where: {
        //         token: token
        //     }
        // })
        if (!user) {
            res.status(401).send({
                message: 'No estas autorizado',
                error
            })
        }
        req.user = user; //aquí seteamos el usuario en el objeto request
        next(); //pasamos a la función controladora o al siguiente middleware
    } catch (error) {
        res.status(401).send({
            message: 'No estas autorizado',
            error
        })
    }
}
module.exports = {
    authentication
};