const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('DataBase connect successfully !')
    } catch (err) {
        console.log('something went wrong try again' , err)
    }
};

module.exports = connectDB;
