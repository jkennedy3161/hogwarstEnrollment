const Student = require('../models/studentModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
  Student.findById(id)
    .populate('house')
    .exec()
    .then(function(student) {
      if (!student) {
        next(new Error('no student with that id found...'));
      } else {
        req.student = student;
        next();
      }
    }, function(err) {
      next(err);
    })
};

exports.listAll = function(req, res, next) {
  Student.find()
    .populate('house')
    .exec()
    .then(function(students) {
      res.json(students);
    }, function(err) {
      next(err);
    })
};

exports.enroll = function(req, res, next) {
  var newStudent = req.body;

  Student.create(newStudent)
    .then(function(student) {
      res.json(student);
    }, function(err) {
      next(err);
    });
};