const { Router } = require('express')
const router = Router()
const { createApplication, renderApplication } = require('../controllers/applicationRouter')

router.post('/', createApplication)
router.get('/', renderApplication)

module.exports = router
