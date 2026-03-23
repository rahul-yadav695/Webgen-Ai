const express = require('express')
const authRouter = express.Router()
const { registerControtler, loginControtler, logoutControtler, getmeControtler } = require('../controllers/user')
const { authMiddleware } = require('../middlewares/auth')

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

authRouter.get('/get-me' , authMiddleware , getmeControtler )


module.exports = authRouter