const express = require('express');
const router = express.Router();

//router login
router.post('/authenticate/',(req,res)=>{
  if (req.body.username === "phuongdao" && req.body.password === "sam"){
    return res.status(200).send("Login success");
  }
  return res.status(500).send("Fail");
});

module.exports = router;
