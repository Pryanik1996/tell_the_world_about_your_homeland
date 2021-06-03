const {Router} = require('express')
const router = Router()
const registrationController = require('../controllers/register')

router.get('/', registrationController.registerRender)
router.post('/', registrationController.registerPost)


module.exports = router
