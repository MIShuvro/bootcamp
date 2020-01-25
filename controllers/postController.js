const axios = require('axios')
const dateformat = require("dateformat")
const db = require('../utils/db')
const article = async (req, res) => {

    let posts = db.get('posts')

    res.render('Article.index', {
        posts
    })
}
const create = (req, res) => {
    res.render('Article.create')
}

const postContent = (req, res) => {
    let now = new Date();
    let {
        id,
        title,
        body,
        author
    } = req.body
    db.get('posts')
        .push({
            id,
            title,
            body,
            date: dateformat(now, "dddd, mmmm dS, yyyy"),
            time: dateformat(now, "h:MM:ss TT"),
            author
        })
        .write()
    res.redirect('/')
}
const getSinglePost = (req, res) => {
    let id = req.params.id
    const post = db.get('posts').find({
        id
    })
    res.render('Article.Show', post.toJSON())
}

const deletePost = (req, res) => {
    let id = req.params.id

    const posts = db.get('posts').remove({
        id
    }).write()

    res.redirect('/')
    // res.send(post)
}

const editPost = (req, res) => {

    let id = req.params.id
    const post = db.get('posts').find({
        id
    })
    res.render("Article.edit", {
        post: post.toJSON()
    })
}

const savedPost = (req, res) => {
    let id = req.params.id
    let {
        title,
        body
    } = req.body
    db.get('posts')
        .find({
            id
        })
        .assign({
            title,
            body
        })
        .write()
    res.redirect('/')
}
module.exports = {
    article,
    create,
    postContent,
    getSinglePost,
    deletePost,
    editPost,
    savedPost
}