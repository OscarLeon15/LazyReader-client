const express = require('express');
const router = express.Router();
const uploadCloud = require('../configs/cloudinary/cloudinaryConfig')

/* GET example page */
// router.get('/example', (req, res, next) => {
//     res.render('hola');
//   });


router.post('/testing', uploadCloud.single('theImage'), (req, res, next) => {
  res.json(req.file)
});

// router.post('/example', req, res, next, uploadCloud.single('theImage'), () => {

// }

module.exports = router;