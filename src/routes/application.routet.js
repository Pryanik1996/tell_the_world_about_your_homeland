const { Router } = require('express')
const router = Router()
const { createApplication, renderApplication } = require('../controllers/application.router')

router.post('/', createApplication)
router.get('/', renderApplication)

module.exports = router
