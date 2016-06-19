var vscode = require('vscode');
var net = require('net');
var Session = require('msgpack5rpc');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    console.log('Congratulations, your extension "vscode-intero" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.sayHello', function () {

        vscode.window.showInformationMessage('Hello World !!!');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;

function test(cb) {
    var socket = net.connect({ path: "/tmp/node.msgpack.rpc.sock" }, function () {
        session = new Session();
        session.attach(socket, socket);
        session.request("add", [41,1], function (err, res) {
            if (err) {
                console.error(err);
                return;
            }

            console.log(res);
            cb(res);
        });
    });
}

exports.test = test;
