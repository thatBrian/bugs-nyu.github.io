const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true,enum:['member','alum','eboard','mentor']},
    position:{type:String},
    description:{type:String},
    image:{
        data:{type:String,require:true},
        extension:{type:String,require:true}
    }
})

const Event = new mongoose.Schema({
    name:{type:String, require:true},
    date:{type:Date},
    updated:{type:Date, default:Date.now},
    description:{type:String},
    image:{
        data:{data:Buffer,contentType:String},
        extension:{type:String,require:true}
    }
})

mongoose.model('profile', Profile)
mongoose.model('event',Event)
var dburl = "mongodb://bugsAdmin:BugsRulez1@ds035533.mlab.com:35533/bugs-database"
mongoose.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true })
