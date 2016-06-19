var assert = require('assert');

var vscode = require('vscode');
var myExtension = require('../extension');

suite("Extension Tests", function () {

    test("msgpack client", function (done) {
        myExtension.test(function (res) {
            assert.equal(res, 42);
            done();
        });
    });
});