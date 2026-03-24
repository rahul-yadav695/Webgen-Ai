require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser")
const { connectDB } = require('./src/config/data')

const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())


connectDB()
const authRouter = require('../Backend/src/routes/user')
const { connect } = require('mongoose')
app.use('/api', authRouter)

app.listen(port, () => {
    console.log(`server start on ${port}`)
})