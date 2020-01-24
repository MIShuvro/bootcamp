const axios = require('axios')
module.exports.postRequest = async (req, res) => {
    // let {
    //     data: posts
    // } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // res.render('index', {
    //     posts
    // })
}
module.exports.article = async (req, res) => {
    let {
        data: posts
    } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('Article.index', posts)
}