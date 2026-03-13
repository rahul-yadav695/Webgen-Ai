const mongoose = require('mongoose')

const userScema = new mongoose.Schema({
    userName : {
        type:String , 
        unique : [true , "user already taken"] , 
        required : true
    },
    email : {
        type:String , 
        unique : [true , "email already exites with this email address"] , 
        required : true
    },
    password : {
        type : String , 
        required : true
    }

})

const userModel = mongoose.model('users' , userScema)
module.exports = userModel;
