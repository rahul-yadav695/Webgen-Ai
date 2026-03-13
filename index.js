require('dotenv').config()
const express = require('express')
const connectDB = require('./src/config/data')
const cookieParser = require("cookie-parser")

const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())

connectDB()

const authRouter = require('./src/routes/user')
app.use('/api', authRouter)

app.listen(port, () => {
    console.log(`server start on ${port}`)
})