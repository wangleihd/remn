var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.name);
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  console.log(req.session.name);
  res.render('index', { title: 'TodoList' , name: req.session.name });
});

module.exports = router;
