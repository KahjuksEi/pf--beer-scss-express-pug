var express = require('express');
var router = express.Router();

/* GET buddy listing. */
router.get('/', function(req, res, next) {
  res.render('buddy', { title: 'Become our buddy!' });
});

module.exports = router;
