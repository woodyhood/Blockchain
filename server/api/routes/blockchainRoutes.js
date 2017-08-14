'use strict';
module.exports = function(app) {
  var controller = require('../controllers/blockchainController');

  //Route to get all the blockchain accounts
  app.route('/accounts')
    .get(controller.list_all_account)

  //Get the ether amount for one account
  app.route('/balance')
      .get(controller.check_Account)

  //Route to get information about a specific transaction on the blockchain
  app.route('/transaction')
    .get(controller.list_transaction)
    .post(controller.send_transaction) //send a new transaction on the blockchain

};
