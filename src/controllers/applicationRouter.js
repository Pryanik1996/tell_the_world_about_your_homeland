const Application = require('../models/application.model')

const createApplication = async (req, res) => {
    const newApplication = new Application({ nomination: req.body.nomination, agecategory: req.body.agecategory, teacherName: req.body.agecategory, teacherEmail: req.body.teacherEmail, teacherPhone: req.body.teacherEmail, teacherLink: req.body.teacherLink, userlink: req.body.userlink, country: req.body.country, index: req.body.index, region: req.body.region, adress: req.body.adress, educationPlace: req.body.educationPlace, workLink: req.body.educationPlace, user: res.locals.user })
    try {
        console.log('Try <---------')
        await newApplication.save();
    } catch (error) {
        console.log('catch ------------------')
        return res.redirect('/application')
    }

    return res.redirect(`/`);
}

const renderApplication = (req, res) => {
    res.render('application')
}

module.exports = { createApplication, renderApplication }