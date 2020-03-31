const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs')
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
                    res.send(user);
                })
                .then(user => {
                    if (user) {
                        return res.status(201).send({ message: 'Bienvenid@' + user.username });
                    }
                    res.send(user);
                })
        })


    }
}

module.exports = UserController