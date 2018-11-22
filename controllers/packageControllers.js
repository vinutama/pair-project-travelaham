const Model = require('../models')

class PackageController {
    static findAll(req, res) {
        Model.Package.findAll()
            .then(function (packages) {
                res.render('package.ejs', { data: packages })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}

module.exports = PackageController