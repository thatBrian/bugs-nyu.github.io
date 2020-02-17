var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
require('../db')
const Profile = mongoose.model("profile")
const Event = mongoose.model("event")
var fs = require('fs');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({"yo":"YO"})
});

router.get('/profiles',(req,res,next)=>{
    Profile.find().then(result=>{

        res.json(result)
    })
})
router.post('/profiles/update',(req,res,next)=>{
    console.log(req.body)
    // TODO: add authentication
    // profileList.forEach(profile => {
    //     let imagebinary=""
    //     try{
    //     imagebinary = base64_encode("../profiles/" + profile.img_path)
    //     }
    //     catch{
    //         console.log("no image")
    //     }
    //     let doc = new Profile({
    //         name:profile.name,
    //         type:profile.type,
    //         position:profile.position?profile.position:"",
    //         description:profile.description?profile.description:"",
    //         image:{
    //             data:imagebinary?imagebinary:"",
    //             extension:profile.img_path?profile.img_path.split(".")[1].toLowerCase():""
    //         }
    //     })
    //     doc.save((err,profile)=>{
    //         if(err) return console.error(err);
    //         console.log("Saved " + profile.name + "'s profile")
    //     });
    // })

    res.send("Working")
})

router.get('/events',(req,res,next)=>{
    Event.find().then(result=>{
        res.json({data:result})
    })
})

module.exports = router;
