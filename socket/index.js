
module.exports = function(http){
  var io = require('socket.io')(http);
  io.on('connection', function(data){
    console.log('one user connect');

  })
}
