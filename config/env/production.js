/*jslint node: true*/
// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'production' environment configuration object
module.exports = {
  db: process.env.MONGODB,
  sessionSecret: process.env.SESSION_SECRET,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOK_CLIENT_SECRET,
    callbackURL: 'http://www.pisolved.com/oauth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: 'http://www.pisolved.com/oauth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://www.pisolved.com/oauth/google/callback'
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://www.pisolved.com/oauth/github/callback'
  }
};
