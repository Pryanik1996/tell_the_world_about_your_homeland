const User = require('../models/user.model')
// const Application = require('../models/application.model')
const Competition = require('../models/comptetition.model')
const adminUser = await User.find({ isAdmin: true })

const createCompetition = async (req, res) => {
  if (adminUser) {
    const { title, description } = req.body
    if (title && description) {
      const newCompetition = await Competition.create(req.body)
      return res.redirect('/admin')
    }
  }
  res.redirect('/')
}

const deleteCompetition = async (req, res) => {
  if (adminUser) {
    try {
      const competition = await Competition.findByIdAndDelete(req.params.id)
      return res.redirect('/admin')
    } catch (error) {
      console.log(error)
    }
  }
  res.redirect('/')
}

const patchCompetition = async (req, res) => {
  if (adminUser) {
    try {
      const competition = await Competition.findByIdAndUpdate(req.params.id);
    } catch (error) {
      console.log(error)
    }
  }
  res.redirect('/admin')
}
