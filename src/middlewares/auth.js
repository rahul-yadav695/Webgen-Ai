const jwt = require("jsonwebtoken")
const tokenBlackList = require("../module/blacklist")

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: "token not provided" })
    }

    const istokenblacklisted = await tokenBlackList.findOne({ token })

    if (istokenblacklisted) {
        return res.status(401).json({ message: "token is blacklisted" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded
        next() 

    } catch (err) {
        return res.send({ status: 0, message: "something went wrong try again", err })
    }
}


module.exports = { authMiddleware }