const {Router} = require('express')
const router = Router()

const adminController = require('../controllers/admin.controller')

router.post('/', adminController.createCompetition)
router.delete('/:id', adminController.deleteCompetition)
router.patch('/:id', adminController.patchCompetition)

module.exports = router;

