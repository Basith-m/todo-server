const express = require('express')
const todoController = require('../controllers/todoController')

const router = new express.Router()

// add todo
router.post('/add-todo', todoController.addTodo)

// get all todo
router.get('/all-todo', todoController.getAllTodo)

// remove todo
router.delete('/remove-todo/:id', todoController.removeTodo)

// edit todo
router.put('/edit-todo/:id', todoController.editTodo)

// export router
module.exports = router