const Router = require('express').Router()

const {
    postRequest,
    article
} = require('../controllers/postController')

Router.get('/', postRequest)
Router.get('/articles', article)
module.exports = Router