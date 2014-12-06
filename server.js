/*jslint node: true*/
process.evn.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();

app.listen(3000);
module.exports = app;

console.log('Server is running at http://localhost:3000');
