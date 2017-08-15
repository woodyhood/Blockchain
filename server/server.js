var app = require('./api/app');
let config = require('./config/config');

var http = require('http');
var server = http.createServer(app);

var port = process.env.PORT || config.server.port;
app.set('port', port);

//Web3 connection object
Web3 = require('web3');
web3 = new Web3();
eth_node_url = 'http://' + config.blockchain.host + ':' + config.blockchain.port
web3.setProvider(new web3.providers.HttpProvider(eth_node_url));

//Check the connection to web3
if(web3.isConnected()) {
  console.log('Success: Web3 is connected');
} else {
  console.log('Warning: Web3 is not connected');
}

//Get all the routes of the project
var routes = require('./api/routes/blockchainRoutes');
routes(app);

app.listen(port);

console.log('Blockchain RESTful API server started on: ' + port);
