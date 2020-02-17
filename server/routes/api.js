var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
require('../db')
const Profile = mongoose.model("Profile")
const Event = mongoose.model("Event")
/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({"yo":"YO"})
});

router.get('/profiles',(req,res,next)=>{
    Profile.find().then(result=>{
        res.json({data:result})
    })
})

router.get('/events',(req,res,next)=>{
    Event.find().then(result=>{
        res.json({data:result})
    })
})

module.exports = router;
