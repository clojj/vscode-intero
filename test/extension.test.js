var assert = require('assert');

var vscode = require('vscode');
var myExtension = require('../extension');

suite("Extension Tests", function () {

    // test("promise", function (done) {
    //     myExtension.activate();
    //     myExtension.testPromise()
    //         .then(function (res) {
    //             assert.equal(res, "***then with 42***");
    //             done();
    //         })
    //         .catch(function (err) {
    //             console.error("catch " + err);
    //         })
    // });
    
    test("intero", function (done) {
    //     myExtension.activate();
        myExtension.callIntero()
            .then(function (res) {
                assert.equal(res, "TODO");
                done();
            })
            .catch(function (err) {
                console.error("catch " + err);
            })
    });
});