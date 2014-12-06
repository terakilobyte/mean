/*jslint node: true*/
'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema ({
  firstName: String,
  lastname: String,
  email: String,
  username: String,
  password: String
});

mongoose.model('User', UserSchema);
