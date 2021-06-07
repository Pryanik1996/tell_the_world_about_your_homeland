const {Router} = require('express')
const router = Router()
const indexController = require('../controllers/index.controller')

router.get('/', indexController.indexRender)
// router.get('/search', indexController.indexSearch)
router.post('/search', indexController.searchRender)

module.exports = router
