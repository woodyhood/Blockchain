var app = require('./api/app');

eth_node_url = 'http://localhost:8545'

var http = require('http');
var server = http.createServer(app);

var port = process.env.PORT || 3001;
app.set('port', port);

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
