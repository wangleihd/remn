var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.name = null;
  res.redirect('/');
});

module.exports = router;
