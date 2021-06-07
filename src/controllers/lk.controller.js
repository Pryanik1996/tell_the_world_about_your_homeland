const User = require('../models/user.model')
const Application = require('../models/application.model')

const renderLk = async (req, res) => {
  const user = await User.findById(req.session.user)
  const application = await Application.find({ user: req.session.user })
  res.render('lk', {user, application})
}


module.exports = { renderLk }
