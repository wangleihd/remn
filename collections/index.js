const mongoose = require('mongoose');
const url = 'mongodb://remn:remn@ds163301.mlab.com:63301/remn';

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  name: { type: String },
  password: { type: String }
});


module.exports.user = mongoose.model('user', userShema);
