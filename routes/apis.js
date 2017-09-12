var express = require('express');
var router = express.Router();
const db = require('../collections');
var ObjectId = require('mongoose').Types.ObjectId;


router.route('/p/').get((req, res) => {
    db.user.find().exec((err, doc) => {
        res.json(doc);
    })
})
.post((req, res) => {
    console.log(req.params.id);
})



router.route('/p/:id').get()
.post(function(req, res){
    console.log(req.params.id);
})


module.exports = router;
