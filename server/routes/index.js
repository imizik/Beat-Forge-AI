const router = require('express').Router();

const {generations} = require('../controller');

router.post('/generations', generations);
router.get('/', (req, res) => {
    res.send('Hello World!');
  });
module.exports = router;