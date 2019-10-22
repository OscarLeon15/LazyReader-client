const express = require('express');
const router  = express.Router();


/* GET example page */
router.get('/example', (req, res, next) => {
    res.render('hola');
  });

module.exports = router;