/*jslint node: true*/

// JavaScript Strict Mode
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODETIME_ACCOUNT_KEY) {
  require('nodetime').profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
    appName: 'pisolved' // optional
  });
}
var mongoose = require('./config/mongoose'),
  express = require('./config/express'),
  passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();
var dotenv = require('dotenv');

// Require our environmental variables
dotenv.load();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;


app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});
module.exports = app;
