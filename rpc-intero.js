var net = require('net');
var Session = require('msgpack5rpc');

var socket = net.connect({ path: "/Users/jwin/stack-projects/ghc8-playground/.intero.sock" }, function () {
  session = new Session();
  session.attach(socket, socket);
  session.request("type", ["someFunc"], function (err, res) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(res);
  });
});