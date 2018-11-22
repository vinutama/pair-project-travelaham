const Model = require('../models')
const session = require('express-session')

class UserController {

    static renderRegisterUser(req, res) {
        res.render('user-register.ejs')
    }
    static registerUser(req, res) {
        let dataUser = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }
        Model.User.create(dataUser)
            .then(function (user) {
                req.session.user = user.dataValues
                res.redirect('/')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}

module.exports = UserController