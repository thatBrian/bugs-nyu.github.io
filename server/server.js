const express = require('express');
const bodyParser= require('body-parser') // Handling Forms
const app = express();
var port = 3000;
var apiRouter = require('./routes/api');

// Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api',apiRouter);

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})




// Setting Port
app.listen(port, () => { 
    console.log("Listening on http://localhost:" + port)
})