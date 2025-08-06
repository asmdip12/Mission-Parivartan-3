const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const TreeForm = require("../models/TreeForm");
const { createHmac, randomBytes } = require("crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();

async function handlesubform(req,res) {
    const data = req.body;
    console.log(data);
    const rs = await TreeForm.create(data);
    const user = await User.findById(data.submittedby);
    user.submissions.push(rs._id);
    await user.save();
    return res.status(201).json({
        message: "Form Submitted Successfully"
    })
}
async function handlegetformdata(req,res) {
  try {
    const forms = await TreeForm.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (err) {
    console.error("Error fetching forms:", err);
    res.status(500).json({ error: "Server error while fetching forms" });
  }
    
}
module.exports = {
    handlesubform,
    handlegetformdata,
}
