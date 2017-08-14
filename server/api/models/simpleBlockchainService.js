module.exports = {
  isConnected: function() {
    return web3.isConnected();
  },

  getAccounts: function() {
    return web3.eth.accounts;
  },

  getTransaction: function(txId) {
    return web3.eth.getTransaction(txId);
  },

  sendTransaction: function(fromAccount, targetAccount, value) {
    return web3.eth.sendTransaction({from: fromAccount, to: targetAccount, value: web3.toWei(value, "ether")})
  },

  getBalance: function(address) {
      return web3.eth.getBalance(address);
  }
};
