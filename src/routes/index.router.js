const {Router} = require('express')
const router = Router()
const indexController = require('../controllers/index.controller')

router.get('/', indexController.indexRender)
router.get('/search', indexController.searchRender)
router.post('/search', indexController.indexSearch)

module.exports = router
