const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


const teamModel = mongoose.model('teams', teamSchema)
module.exports = teamModel
