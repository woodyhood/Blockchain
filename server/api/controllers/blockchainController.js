'use strict';

var BlockchainService = require('../models/simpleBlockchainService');

/*
  List all the account on the blockchain
*/
exports.list_all_account = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    res.json(BlockchainService.getAccounts());
  }
};

/*
  Check the balance of an address
  The sender has to add the parameter 'address'=AccountAddress to his query
*/
exports.check_Account = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    res.json(BlockchainService.getBalance(req.query.address));
  }
}

/*
  Get the information about a transaction
  The sender has to add the parameter 'Id'=TransactionHash to his query
*/
exports.list_transaction = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    res.json(BlockchainService.getTransaction(req.query.Id));
  }
};

/*
  Send a transaction from one account to another one
  The sender has to add the parameters 'from'=Address of the sender
  'To'=Address of the receiver
  'value'=Amount of Ether
*/
exports.send_transaction = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    var from = req.body.from;
    var to = req.body.to;
    var value = req.body.value;
    res.send(BlockchainService.sendTransaction(from, to, value));
  }

};
