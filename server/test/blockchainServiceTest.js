'use strict'

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let config = require('../config/config');
let transactionHash;
// Those addresses has to change acording to the test blockchain
let accountAddress = '0x9a07e3aa142ec43f9e0e83874eaa0c36661f200d'
let receiverAddress = '0x7c5afef77b864c0a86e42a1df220c6ae43a4e5e1'

describe('Blockchain', () => {

  it('Should get all the account of the blockchain', (done) => {
    chai.request('http://localhost:' + config.server.port)
      .get('/accounts')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Should check the balance of an account', (done) => {
    chai.request('http://localhost:' + config.server.port)
      .get('/balance?address=' + accountAddress)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Should send Ether from an account to another one', (done) => {
    chai.request('http://localhost:' + config.server.port)
      .post('/transaction')
      .send({ from: accountAddress, to: receiverAddress, value:10 })
      .end((err, res) => {
        transactionHash = res.text;
        res.should.have.status(200);
        done();
      });
  });

  it('Should get the information about a transaction', (done) => {
    chai.request('http://localhost:' + config.server.port)
      .get('/transaction?Id=' + transactionHash)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
