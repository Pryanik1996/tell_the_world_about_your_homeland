// const User = require('../models/user')

const currentUser = {
  _id: 123,
  email: '123@123.ru',
  password: '123',
  name: 'Vasya',
}

const loginRender = (req, res) => {
  res.render('login')
}

const loginPost = async (req, res) => {
  const { email, password } = req.body
    if (email && password) {
      // const currentUser = await User.findOne({ email, password }) // находим юзера с такой почтой 
        if (/*currentUser*/currentUser.password === password) {
          req.session.user = { id: currentUser._id, }
          req.session.name = currentUser.name;
            return res.redirect('/');
        }
    }
    return res.status(418).redirect('/login')
}

const logout = (req, res) => {
  req.session.destroy();
  res.clearCookie(req.app.get('cookieName'))
  res.redirect('/');
}


module.exports = {loginRender, loginPost, logout}
