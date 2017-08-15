# Blockchain
Blockchain Service

This application is a small service with a restfull API that proxies calls for an ethereum wallet UI to a geth node.

How to run the application:

Before:
You have to install a blockchain client or a test client like 'testrpc'.

When the installation has been done, open the config file: server => config.
Change inside the blockchain block the host and the port according to the test client.

Server:
To run the server, you have to go to the server repository and run the command line: npm run start

Test:
Some test case has been done to test the Rest endpoints, when the server has been launched, you can run the command line: npm test
