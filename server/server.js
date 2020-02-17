const express = require('express');
const bodyParser= require('body-parser') // Handling Forms
var mongoose = require('mongoose')
require('./db')
const Profile = mongoose.model('Profile')
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}))


//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})




// Setting Port
app.listen(3000, () => { 
    console.log("HEY")
})