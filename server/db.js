const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true,enum:['member','alum','eboard','mentor']},
    position:{type:String},
    description:{type:String},
    image:{
        data:{type:String,require:true},
        extension:{type:String,require:true}
    },
    links:{
        github:{type:String},
        facebook:{type:String},
        instagram:{type:String},
        linkedin:{type:String},
        website:{type:String},
    }
})

const Event = new mongoose.Schema({
    name:{type:String, require:true},
    date:{type:Date},
    location:{
        name:{type:String},
        address:{type:String}
    },
    updated:{type:Date, default:Date.now},
    description:{type:String},
    link:{type:String},
})

mongoose.model('profile', Profile)
mongoose.model('event',Event)
var dburl = "mongodb://bugsAdmin:BugsRulez1@ds035533.mlab.com:35533/bugs-database"
mongoose.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true })
