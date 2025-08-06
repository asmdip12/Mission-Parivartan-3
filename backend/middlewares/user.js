import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function checkAuth (req, res, next) {
    const token = req.cookies?.token;
    if (!token) {
        return next();
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Forbidden" });
    }
}
function onlyForLoggedINUsers (req, res, next) {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Forbidden" });
    }
}
export { checkAuth,onlyForLoggedINUsers };