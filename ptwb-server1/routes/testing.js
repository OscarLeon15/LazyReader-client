const express = require('express');
const router = express.Router();
const uploadCloud = require('../configs/cloudinary/cloudinaryConfig')


router.post('/testing', uploadCloud.single('theImage'), (req, res, next) => {
  res.json(req.file.secure_url)
});

// router.post('/example', req, res, next, uploadCloud.single('theImage'), () => {

// }

module.exports = router;