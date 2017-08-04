const _ = require('lodash');

let House = require('../models/houseModel');

exports.params = function(req, res, next, id) {
  Housee.findById(id)
    .then(function(house) {
      if (!house) {
        next(new Error('no house with that id found...'));
      } else {
        req.house = house;
        next();
      }
    }, function(err) {
      next(err);
    })
};

exports.findAll = function(req, res, next) {
  House.find()
    .then(function(houses) {
      res.json(houses);
    }, function(err) {
      next(err);
    })
};

exports.createHouse = function(req, res, next) {
  let newHouse = req.body;

  House.create(newHouse)
    .then(function(house) {
      res.json(house);
    }, function(err) {
      next(err);
    });
};