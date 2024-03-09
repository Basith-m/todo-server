require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const todo_server = express()
todo_server.use(cors())
todo_server.use(express.json())
todo_server.use(router)
const PORT = 4000 || process.env.PORT

todo_server.listen(PORT, () => {
    console.log(`todo server started at ${PORT}`)
})