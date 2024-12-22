const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const uri = process.env.MONGO_URI;


const app = express()

app.use(express.json()) 
app.use(cors())

mongoose.connect(uri) 

// const db = mongoose.connection 
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//     console.log('Connected to database')
// })

app.post("/register", (req,res) => {
    
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})