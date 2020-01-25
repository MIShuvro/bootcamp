const express = require('express')
const app = express()
require('dotenv').config()

/**
 * Template Engine SetUp
 */
const {
    config,
    engine
} = require('express-edge');
config({
    cache: process.env.NODE_ENV === 'production'
});
app.use(engine);
app.set('views', `${__dirname}/views`);

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
/**
 * Setup Static dir
 */

/**
 * Routes
 */
app.use(express.static("public"))

app.get('/', require('./controllers/postController').article)
app.use('/articles', require('./routes/post'))

app.use('/pages', require('./routes/page'))
app.all("*", (req, res) => {

    res.render('pages.404'), {
        name: "Not Found"
    }

})



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port is ${process.env.PORT}`)
})