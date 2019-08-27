var express = require('express');
var router = express.Router();

/* GET pubs listing. */
router.get('/', function(req, res, next) {
  res.render('pubs', { title: 'Our pubs!' });
});

module.exports = router;