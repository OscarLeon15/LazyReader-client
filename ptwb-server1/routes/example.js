const express = require('express');
const router  = express.Router();
const upload = require('../config/cloudinaryConfig');



/* GET example page */
// router.get('/example', (req, res, next) => {
//     res.render('hola');
//   });

  router.post('/create-profile', upload.single('picture'), (req, res, next) => {
    const { name } = req.body;
    let picture = req.file.url;
  
    const newProfile = new Profile({ username, name, favoriteLeague, favoriteTeam, picture});
    newProfile.save()
      .then((profile) => {
        res.redirect('/private-page')
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = router;