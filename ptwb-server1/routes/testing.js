const express = require('express');
const router = express.Router();
const upload = require('../configs/cloudinary/cloudinaryConfig')

/* GET example page */
// router.get('/example', (req, res, next) => {
//     res.render('hola');
//   });


router.post('/testing', (req, res, next) => {
  res.render('hola')
});

// router.post('/example', req, res, next, uploadCloud.single('theImage'), () => {

// }

module.exports = router;