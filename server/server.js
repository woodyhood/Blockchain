var express = require('express'),
  app = express(),
  var port = 3001;
  var eth_node_url = 'http://localhost:8545'
  port = process.env.PORT || port;

  //Use to parse the body of post request
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //Web3 connection object
  Web3 = require('web3');
  web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider(eth_node_url));

  if(web3.isConnected()) {
    console.log('Success: Web3 is connected');
  } else {
    console.log('Warning: Web3 is not connected');
  }

  var routes = require('./api/routes/blockchainRoutes');
  routes(app);

  app.listen(port);

  console.log('Blockchain RESTful API server started on: ' + port);
