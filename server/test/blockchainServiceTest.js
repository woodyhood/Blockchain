'use strict'

var expect  = require('chai').expect;
var request = require('request');

it('Accounts', function() {
    request('http://localhost:3001/accounts' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});

it('Balance', function() {
    request('http://localhost:3001/balance' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});


it('Blockchain transaction', function() {
    request('http://localhost:3001/transaction' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});
