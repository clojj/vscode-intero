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

    test("promise", function (done) {
        myExtension.testPromise()
            .then(function (res) {
                assert.equal(res, "***then with 42***");
                done();
            })
            .catch(function (err) {
                console.log("CATCHED Error: " + err);
                done();
            })
    });
});