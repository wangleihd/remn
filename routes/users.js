var express = require('express');
var router = express.Router();
const db = require('../collections');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let user = db.user().save();
  res.send('respond with a resource');
});

module.exports = router;
