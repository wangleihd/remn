const mongoose = require('mongoose');
const url = 'mongodb://cnstu.top:27017/stu';
//const url = 'mongodb://192.168.1.11:27017/stu';

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  name: {type: String, default: 'admin' },
  passwd: {type: String, default: 'admin' }
});


module.exports.user = mongoose.model('user', userShema);
