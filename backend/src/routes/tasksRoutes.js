const router = require("express").Router()
const tasksController = require('../controllers/TasksController')

router.get('/', tasksController.getAll)
router.put('/:id', tasksController.update)

module.exports = router