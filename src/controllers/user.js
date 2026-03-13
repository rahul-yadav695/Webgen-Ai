const userModel = require("../module/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const tokenBlackList = require("../module/blacklist")

const registerControtler = async (req, res) => {
    try {

        const { userName, email, password } = req.body

        if (!userName || !email || !password) {
            return res.status(400).json({ message: "all fields are required" })
        }

        const isuserExist = await userModel.findOne({
            $or: [{ userName }, { email }]
        })

        if (isuserExist) {
            return res.status(400).json({ message: "user already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            userName,
            email,
            password: hashPassword
        })

        const token = jwt.sign(
            { id: user._id, userName: user.userName },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie("token", token)

        return res.status(201).json({
            message: "user registered successfully",
            user: {
                id: user._id,
                userName: user.userName,
                email: user.email
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }
}


const loginControtler = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "email and password required" })
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "user not found" })
        }

        const ispasswordvalid = await bcrypt.compare(password, user.password)

        if (!ispasswordvalid) {
            return res.status(400).json({ message: "invalid password" })
        }

        const token = jwt.sign(
            { id: user._id, userName: user.userName },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie("token", token)

        return res.status(200).json({
            message: "user login successfully",
            user: {
                id: user._id,
                userName: user.userName,
                email: user.email
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }
}




const logoutControtler = async (req, res) => {
    try {

        const token = req.cookies.token

        if (token) {
            await tokenBlackList.create({ token })
        }

        res.clearCookie("token")

        return res.status(200).json({
            message: "user logout successfully"
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }
}

const getmeControtler = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id)

        res.send({
            message: "user found",
            id: user._id,
            userName: user.userName,
            email: user.email
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }
}


module.exports = { registerControtler, loginControtler, logoutControtler, getmeControtler }