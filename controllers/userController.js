const Model = require('../models')


class UserController {
    static renderRegisterUser(req, res) {
        res.render('user-register.ejs', { errors: req.query.errors || null })
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
                res.redirect('/user/register' + '?errors=' + JSON.stringify(err))
            })
    }
    static renderLoginUser(req, res) {
        res.render('user-login.ejs')
    }

    static loginUser(req, res) {
        let username = req.body.username
        let password = req.body.password
        Model.User.findOne({
            where: {
                username: username
            }
        })
            .then(function (user) {
                if (!user) {
                    res.redirect('/user/login')
                } else if (!user.validatePassword(password)) {
                    res.redirect('/user/login')
                } else {
                    req.session.user = user.dataValues
                    res.redirect('/')
                }
            })
    }
}

module.exports = UserController