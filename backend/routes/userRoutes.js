const express = require("express");
const {checkAuth,onlyForLoggedINUsers} = require("../middlewares/user");

const {handleUserLogIn,handleUserSignUp,handlecookieereset,handeVerifyUser,handeGetUser} = require("../controllers/user.js");


const router = express.Router();

router.post("/signup", handleUserSignUp);
router.post("/login",handleUserLogIn);
router.get("/logout",handlecookieereset);
router.get("/verify",onlyForLoggedINUsers,handeVerifyUser);
router.get("/:id",handeGetUser);

module.exports = router;