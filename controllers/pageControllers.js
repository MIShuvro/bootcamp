module.exports.about = (req, res) => {
    res.render('pages.about', {
        name: "About"
    })
}

module.exports.contact = (req, res) => {
    res.render('pages.contact', {
        name: "Contact"
    })
}
module.exports.service = (req, res) => {
    res.render('pages.services', {
        name: "Service"
    })
}