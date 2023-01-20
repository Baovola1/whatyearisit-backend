var express = require('express');
var router = express.Router();



/* Création route GET/year */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

module.exports = router;
