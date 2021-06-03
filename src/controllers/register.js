
const registerRender = (req, res) => {
  res.render('register')
}

const registerPost = async (req, res) => {
  const{name, email, password, city, birthdate} = req.body
  if(name, email, password, city, birthdate) {
  const User = await User.create(req.body)
  }
}

module.exports = {registerRender, registerPost}
