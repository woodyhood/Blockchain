'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let config = require('../config/config');

let app = express();

//Use to parse the body of post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;
