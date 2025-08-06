const express = require("express");
const router = express.Router();

const {handlegetformdata,handlesubform} =require("../controllers/treeform")

router.post("/subform",handlesubform);
router.get("/getformdata",handlegetformdata)

module.exports = router;