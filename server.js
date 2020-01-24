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

/**
 * Setup Static dir
 */

/**
 * Routes
 */
app.use(express.static("public"))

app.use('', require('./routes/post'))

app.get('/about', (req, res) => {
    res.render('pages.about', {
        name: "About"
    })
})
app.get('/contact', (req, res) => {
    res.render('pages.contact', {
        name: "Contact"
    })
})
app.get('/service', (req, res) => {
    res.render('pages.services', {
        name: "Service"
    })
})




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port is ${process.env.PORT}`)
})