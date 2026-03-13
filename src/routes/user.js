const express = require('express')
const authRouter = express.Router()
const { registerControtler, loginControtler, logoutControtler } = require('../controllers/user')

/**
@route POST /api/auth/ register
@description Login user with email and password
@access Public
**/
authRouter.post('/register', registerControtler)

/**
@route POST /api/auth/ Login
@description Login user with email and password
@access Public
**/ 
authRouter.post('/login', loginControtler )

authRouter.get('/logout', logoutControtler )


module.exports = authRouter