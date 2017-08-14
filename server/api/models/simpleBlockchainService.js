module.exports = {

  /*
    Test the connection to the node
  */
  isConnected: function() {
    return web3.isConnected();
  },

  /*
    List all the accounts on the blockchain
  */
  getAccounts: function() {
    return web3.eth.accounts;
  },

  /*
    tx Id has to be the hash of the transaction in the blockchain
    The result will be all the information about a transaction
  */
  getTransaction: function(txId) {
    return web3.eth.getTransaction(txId);
  },

  /*
    Send a transaction from "fromAccount" to "targetAccount"
    Value is the amount of Ether transfered between the two accounts
  */
  sendTransaction: function(fromAccount, targetAccount, value) {
    return web3.eth.sendTransaction({from: fromAccount, to: targetAccount, value: web3.toWei(value, "ether")})
  },

  /*
    Get the amount of Ether for ane account on the blockchain
  */
  getBalance: function(address) {
      return web3.eth.getBalance(address);
  }
};
