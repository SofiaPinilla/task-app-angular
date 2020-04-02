const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env]
const UserController = {
    register(req, res) {
        const hash = bcrypt.hashSync(req.body.password, 10);
        User.create({...req.body, password: hash })
            .then(user => {
                if (user) {
                    return res.status(201).send({ message: 'Usuario creado con éxito' });
                }
                res.send(user);
            })
    },
    login(req, res) {
        User.findOne({
            where: {
                username: req.body.username
            }
        }).then(user => {
            if (!user) {
                return res.status(400).send({ message: 'Usuario o contraseña incorrectos' });
            }
            bcrypt.compare(req.body.password, user.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).send({ message: 'Usuario o contraseña incorrectos' });
                }
                token = jwt.sign({ id: user.id }, jwt_secret)
                res.send({ message: 'Bienvenid@' + user.username, user, token });
            });
        });


    },
    getInfo(req, res) {
        res.send(req.user);
    }
}


module.exports = UserController