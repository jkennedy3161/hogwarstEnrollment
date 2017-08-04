const router = require('express').Router();

const houseRouter = require('./routes/houseRoutes');
const studentRouter = require('./routes/studentRoutes');
// hook different model routes here
router.use('/houses', houseRouter);
router.use('/students', studentRouter);

module.exports = router;