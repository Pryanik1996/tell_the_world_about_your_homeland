const User = require('../models/user.model')
const Application = require('../models/application.model')


const indexRender = async (req, res) => {
  res.render('index')
}

const searchRender = async (req, res) => {
  res.render('search')
}

const indexSearch = async (req, res) => {
  const {city} = req.body
  const cityLowerCase = city.toLowerCase().trim()
  // console.log(cityLowerCase)
  const UserCity = await User.find({city : cityLowerCase})
  console.log(UserCity)
  const applicationCity = []
  UserCity.forEach((el) => applicationCity.push(el._id))
  console.log(applicationCity)
  // for(let i = 0; i < applicationCity.length; i++) {
  //   const arr = []
    const arr1 = await Application.find({user : applicationCity[0]})
    console.log(arr1)
  // }
  

  res.redirect('/')
}



module.exports = {
  indexRender,
  indexSearch,
  searchRender
}
