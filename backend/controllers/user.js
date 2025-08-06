const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const { createHmac, randomBytes } = require("crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();

const https = require('https');


async function handleUserSignUp(req,res) {
    const {name,password,url} = req.body;
    const user_json_url = url;
    console.log(url);
    
    let phoneno = 0;
    let email = '';
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

    https.get(user_json_url,  (res) => {
        let data = '';
      
        // A chunk of data has been received.
        res.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received.
        res.on('end', async () => {
          const jsonData = JSON.parse(data);
      
          // Access user_country_code and user_phone_number
          
          
          if(jsonData.user_phone_number) {
            phoneno = jsonData.user_phone_number;
          }
          else {
            email = jsonData.user_email_id;
          }

          
          
          await User.create(
            {
                name,
                email,
                phoneno,
                hashedPassword,
                salt,
            }
        )
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });

    
    return res.status(201).json({
        message: "User Created Successfully"
    })
}
async function handleUserLogIn(req,res) {
    const {email,phoneno,password} = req.body;
    let user;
    if(email)
     user = await User.findOne({email});
    else {
        user = await User.findOne({phoneno});
    }
    if(!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }
    const givenHashedPassword = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");

    if(givenHashedPassword !== user.hashedPassword) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }
    else{
        const payLoad = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
        const token = jwt.sign(payLoad, process.env.JWT_SECRET);
        return res.status(200).cookie("token", token,{
            httpOnly: true,
            secure: false, // true in production with HTTPS
            sameSite: "None", // or "None" if cross-origin
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }).json({
            message: "User Logged In Successfully",
            user: payLoad
        });
    }
}
const handeVerifyUser = (req,res)=>{
    const user = {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
    }
    return res.status(200).json({
        message: "User Verified",
        user
    });

}
async function handlecookieereset(req,res) {
    res.clearCookie("token",{
            httpOnly: true,
            secure: false, // true in production with HTTPS
            sameSite: "Lax", // or "None" if cross-origin
            path: "/"
        });
    return res.status(200).json({
        message: "User Logged Out Successfully"
    });
}
async function handeGetUser(req,res) {
    try{
    const username = req.params.id;
    const user = await User.findOne({name:username}).populate("posts")
    if(!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }
    res.status(200).json(user);
    }catch(error) {
    console.error("Error adding Like:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
    handleUserSignUp,
    handleUserLogIn,
    handlecookieereset,
    handeVerifyUser,
    handeGetUser,
}
