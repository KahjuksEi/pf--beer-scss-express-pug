var express = require('express');
var router = express.Router();

/* GET 404 listing. */
router.get('https://fierce-reaches-84796.herokuapp.com/', function(req, res, next) {
  res.render('404');
});

module.exports = router;