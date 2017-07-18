var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('login', {title: 'Login'});
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  db.user.findOne({
    name: req.body.name
  }, function(err, data) {
    bcrypt.compare(req.body.password, data.password, function(err, hash) {
      if (hash) {
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    });
  });
});

module.exports = router;
