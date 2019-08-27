var express = require('express');
var router = express.Router();

/* GET beer listing. */
router.get('/', function(req, res, next) {
  res.render('beer', { title: 'Our beer!' });
});

module.exports = router;