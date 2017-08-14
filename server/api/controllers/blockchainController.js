'use strict';

var BlockchainService = require('../models/simpleBlockchainService');

exports.list_all_account = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    res.json(BlockchainService.getAccounts());
  }
};

exports.check_Account = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    res.json(BlockchainService.getBalance(req.query.Address));
  }
}

exports.list_transaction = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    console.log(req.Id);
    res.json(BlockchainService.getTransaction(req.query.Id));
  }
};

exports.send_transaction = function(req, res) {
  if(!BlockchainService.isConnected()) {
    res.send(err);
  } else {
    var from = req.body.from;
    var to = req.body.to;
    var value = req.body.value;
    res.send(sendTransaction(from, to, value));
  }

};
