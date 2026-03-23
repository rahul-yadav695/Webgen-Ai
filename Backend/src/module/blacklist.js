const mongoose = require('mongoose')

const blacklisttokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "token is required to be added in black list"]
    }
},{
    timestamps : true
})

const tokenBlackList = mongoose.model('blacklist' , blacklisttokenSchema)
module.exports = tokenBlackList