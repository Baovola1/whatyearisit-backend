var express = require('express');
var router = express.Router();


/* Création route GET/year */
router.get('/',(req, res,) => {
  res.json({year: new Date().getFullYear().toString()});
  });  

module.exports = router;