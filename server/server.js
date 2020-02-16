const express = require('express');
const bodyParser= require('body-parser') // Handling Forms
const MongoClient = require('mongodb').MongoClient
const app = express();
var db

MongoClient.connect('mongodb://admin:Placeh0lder@ds035533.mlab.com:35533/bugs-database', (err, client) => {
  if (err) return console.log(err)
  db = client.db() // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

// Middleware
app.use(bodyParser.urlencoded({extended: true}))


//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})




// // Setting Port
// app.listen(3000, () => { 
//     console.log("HEY")
// })