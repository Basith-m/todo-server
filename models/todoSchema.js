const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    initiateDate: {
        type: String,
        required: true
    },
    todo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    }
})

const todos = mongoose.model("todos", todoSchema)
module.exports = todos