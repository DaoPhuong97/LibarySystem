const express = require('express');
const router = express.Router();

//router login
router.post('/authenticate/',(req,res)=>{
  if (req.body.username === "daophuong" && req.body.password === "sam"){
    console.log("success");
    return res.status(200).send("Login success");
  }else{
    return res.status(500).send("Fail");
  }
});

module.exports = router;
