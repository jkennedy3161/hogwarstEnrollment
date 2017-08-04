const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.param('id', studentController.params);

router.route('/')
  .get(studentController.listAll)
  .post(studentController.enroll);


module.exports = router;