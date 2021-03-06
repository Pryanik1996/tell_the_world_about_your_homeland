const User = require('../models/user.model')
const Application = require('../models/application.model')


const indexRender = async (req, res) => {
  res.render('index')
}
const indexSearch = async (req, res) => {
  res.render('search')
}

const searchRender = async (req, res) => {

  const { city } = req.body
  console.log(req.body)
  const cityLowerCase = city.toLowerCase().trim()
  const UserCity = await User.find({ city: cityLowerCase })
  const arrUserId = UserCity.map((el) => el._id)
  const competition = await Application.find({ user: { $in: arrUserId } })
  console.log(competition.workLink)
  res.render('search', { comp: competition })
}



module.exports = {
  indexRender,
  indexSearch,
  searchRender
}
