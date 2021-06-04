const {Router} = require('express')
const router = Router()
const {renderLk} = require('../controllers/lk.controller')



router.get ('/', renderLk)


module.exports = router
