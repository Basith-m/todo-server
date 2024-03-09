const { response } = require('express')
const todos = require('../models/todoSchema')

// add todo
exports.addTodo = async (req, res) => {
    const { initiateDate, todo, status} = req.body
    try {
        const newTodo = new todos({
            initiateDate,
            todo,
            status
        })
        await newTodo.save()

        res.status(200).json(newTodo)
    } catch (error) {
        res.status("401").json(`todo adding failed !!! Error : ${error}`)
    }
}

// get all todo

exports.getAllTodo = async (req, res) => {
    try{
        const result = await todos.find()
        res.status(200).json(result)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// delete todo
exports.removeTodo = async (req, res) => {
    const { id } = req.params
    try {
        await todos.findByIdAndDelete(id)
        res.status(200).json("Deletion successful")
    } catch (error) {
        res.status(401).json(`Deletion fail Error : ${error}`)
    }
}

// edit todo
exports.editTodo = async (req, res) => {
    const { initiateDate, todo, status } = req.body
    const { id } = req.params
    try {
        const editTodo = await todos.findByIdAndUpdate( id, {
            initiateDate,
            todo,
            status
        }, {new:true})
        await editTodo.save()
        res.status(200).json(editTodo)
    }
    catch(error) {
        res.status(401).json(`Updation failed Error : ${error}`)
    }
}
