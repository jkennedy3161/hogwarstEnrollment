const router = require('express').Router();

const houseRouter = require('./routes/houseRoutes');
// hook different model routes here
router.use('/houses', houseRouter);

module.exports = router;