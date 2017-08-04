const houseController = require('../controllers/houseController');
const router = require('express').Router();

router.param('id', houseController.params);

router.route('/')
  .get(houseController.findAll)
  .post(houseController.createHouse);

module.exports = router;