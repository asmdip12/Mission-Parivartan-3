const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    phoneno: {
        type:Number,
        unique : true,
    },
    email: {
        type:String,
        unique : true,
    },
    hashedPassword :{
        type:String,
        required: true,
    },
    
    role : {
        type : String,
        enum : ["user","admin"],
        default : "user",
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
    salt :{
        type:String,
    },
    submissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TreeForm'
    }
  ],

},{timestamps : true});

const User =  mongoose.models.User || mongoose.model("User",userSchema);

module.exports = User;