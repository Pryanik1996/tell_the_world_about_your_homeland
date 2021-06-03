const {Router} = require('express')
const router = Router()

const adminController = require('../controllers/admin.controller')

router.post('/', adminController)
router.delete('/:id', adminController)
