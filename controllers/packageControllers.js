const Model = require('../models')
const getCurrency = require('../helpers/getCurrency')

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
    static packageDetail(req, res) {
        Model.Package.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (data) {
                res.render('package-detail.ejs', { data: data, getCurrency: getCurrency })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}

module.exports = PackageController