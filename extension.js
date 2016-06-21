var vscode = require('vscode');
var net = require('net');
var Session = require('msgpack5rpc');

// var socket = net.connect({ path: "/tmp/node.msgpack.rpc.sock" });
var socket = net.connect({ path: "/Users/jwin/stack-projects/ghc8-playground/.intero.sock" });
socket.on('error', function (ex) {
    console.error(ex);
});
var session = new Session();
session.attach(socket, socket);


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

function fetchRpc(params) {
    return new Promise(
        function (resolve, reject) {
            session.request(params.fn, params.data, function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        }
    );
}

function callIntero() {
    return fetchRpc({ fn: "check", data: ["Main"] })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch(function (err) {
            console.log("catch " + err);
        })

}

exports.callIntero = callIntero;

// function testPromise() {
//     return fetchRpc({ fn: "add", data: [41, 1] })
//         .then((res) =>
//             fetchRpc({ fn: "echo", data: ["then with " + res] }))
//         .catch(function (err) {
//             console.log("catch " + err);
//         })

// }

// exports.testPromise = testPromise;
