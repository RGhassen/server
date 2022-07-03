const mongoose = require('mongoose')
require('dotenv').config()
const ConnectDb = async () => {
    try {
        await mongoose.connect ('mongodb+srv://ghassen:ghassen@cluster0.xphjr.mongodb.net/?retryWrites=true&w=majority') ; 
        console.log ('db is connected' ) ; 
    } catch (error) {
        console.log ({msg: 'Error connecting to db atlas'} , error)
    
    }
}

module.exports = ConnectDb