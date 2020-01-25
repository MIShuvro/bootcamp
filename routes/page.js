const Router = require('express').Router()
const {

    about,
    contact,
    service,

} = require('../controllers/pageControllers')
Router.get('/about', about)
Router.get('/contact', contact)
Router.get('/service', service)


module.exports = Router