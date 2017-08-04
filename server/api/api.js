const router = require('express').Router();

// hook different model routes here
router.get('/hogwarts', function(req, res, next) {
  res.json({
    ok: true
  });
});

module.exports = router;