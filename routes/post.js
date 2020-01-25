const Router = require('express').Router()

const {

    article,
    create,
    postContent,
    getSinglePost,
    deletePost,
    editPost,
    savedPost
} = require('../controllers/postController')


Router.get('/', article)
Router.get('/create', create)
Router.get('/:id', getSinglePost)
Router.get("/delete/:id", deletePost)
Router.post('/edit/:id', editPost)

Router.post('/update/:id', savedPost)
Router.post('/', postContent)



module.exports = Router