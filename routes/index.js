var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.name);
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  console.log(req.session.name);
  var data = {
    name: 'React-ejs',
    age: 19,
    sex: 'famanl',
    user: 'amber'
  }
  res.render('index', { title: 'TodoList' , name: req.session.name , data: data});
});

module.exports = router;
