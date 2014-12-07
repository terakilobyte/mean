/*jslint node: true*/
'use strict';
var users = require('../controllers/users.server.controller.js');

module.exports = function (app) {

  //var users = require('../controllers/users.server.controller.js');
  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);
  app.param('userId', users.userByID);
};
