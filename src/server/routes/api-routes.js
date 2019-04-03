const express = require('express');
const router = express.Router();

//API add picture to server and return imagePath
router.post('/add/picture', multer({
  storage: storage
}).single("image"), async (req, res) => {
  const url = req.protocol + '://' + req.get("host");
  let imagePath = url + "/images/" + req.file.filename;
  res.status(200).json({
    avatarUrl: imagePath
  })
});

module.exports = router;
