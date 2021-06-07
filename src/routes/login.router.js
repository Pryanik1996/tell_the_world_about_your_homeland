const { Router } = require('express')
const router = Router()
const {loginRender, loginPost, logout} = require('../controllers/login.controller')

router.get('/', loginRender)

router.post('/', loginPost)

router.get('/logout', logout)

module.exports = router
