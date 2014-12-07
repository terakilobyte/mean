/*jslint node: true*/
'use strict';
var User = require('mongoose').model('User');

exports.create = function (req, res, next) {
  var user = new User(req.body);

  user.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = function (req, res, next) {
  User.find({}, 'email username', function (err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};
exports.read = function (req, res, next) {
  res.json(req.user);
};

exports.userByID = function (req, res, next, id) {
  var ObjectId = require('mongoose').Types.ObjectId;
  User.findOne({
    _id: id.toString()
  }, function (err, user) {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

exports.update = function (req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function (err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.delete = function (req, res, next) {
  req.user.remove(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.user);
    }
  });
};
