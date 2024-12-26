const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const teamModel = require('./models/team')

require('dotenv').config()

const uri = process.env.MONGO_URI;


const app = express()

app.use(express.json()) 
app.use(cors())

mongoose.connect(uri) 

const db = mongoose.connection 
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected to database')
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await teamModel.findOne({ email });
    if (user) {
        if (user.password === password) {
            res.status(200).json('Success');
        } else {
            res.status(401).json('Incorrect password');
        }
    } else {
        res.status(404).json('User not found');
    }
});


app.post("/register", async (req, res) => {
    try {
        const team = await teamModel.create(req.body);
        res.status(201).json(team);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.listen(5000, () => {
    console.log('Server is running on port ####')
})