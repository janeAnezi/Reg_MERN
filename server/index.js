const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const uri = process.env.MONGO_URI;


const app = express()

app.use(express.json()) 
app.use(cors())

mongoose.connect('uri', { useNewUrlParser: true, useUnifiedTopology: true }) 

const db = mongoose.connection 
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected to database')
})
