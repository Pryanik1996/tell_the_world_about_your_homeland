const User = require('../models/user.model')
const Application = require('../models/application.model')

const registerRender = (req, res) => {
  res.render('register')
}

const registerPost = async (req, res) => {
  const { name, birthdate, email, password, city } = req.body
  if (name && birthdate && email && password && city) {
    const newUser = await User.create(req.body)
    if (newUser) {
      req.session.user = newUser._id;
      req.session.name = newUser.name;
    }
      // req.sessions.userId = newUser._id
      // console.log(req.sessions.userId)
      // const application = Application.
      
      return res.redirect('/')
  }
  res.redirect('/register')
}



module.exports = { registerRender, registerPost }
