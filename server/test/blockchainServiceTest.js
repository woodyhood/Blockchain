'use strict'

var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function() {
    request('http://localhost:3001/accounts' , function(error, response, body) {
        console.log(response);
        expect(body).to.equal('Hello World');
    });
});
