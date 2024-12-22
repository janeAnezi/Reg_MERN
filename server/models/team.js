const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    userPassword: String
})

const teamModel = mongoose.model('team', teamSchema)