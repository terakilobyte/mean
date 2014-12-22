/*jslint node: true*/
// Invoke 'strict' JavaScript mode
'use strict';
var dotenv = require('dotenv');

  // Require our environmental variables
  dotenv.load();

// Set the 'development' environment configuration object
module.exports = {
  db: 'mongodb://localhost/mean-bookB',
  sessionSecret: process.env.SESSION_SECRET,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/oauth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/oauth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/oauth/google/callback'
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://www.localhost:8080.com/oauth/github/callback'
  }
};
