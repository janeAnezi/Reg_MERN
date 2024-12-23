const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const teamModel = mongoose.model('team', teamSchema)
module.exports = teamModel
