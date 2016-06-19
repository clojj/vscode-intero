var net = require('net');
var Session = require('msgpack5rpc');

var socket = net.connect({ path: "/tmp/node.msgpack.rpc.sock" }, function () {
  session = new Session();
  session.attach(socket, socket);
  session.request("echo", ["ABC"], function (err, res) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(res);
  });
});