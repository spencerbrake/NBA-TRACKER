const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');
console.log(playersCtrl)

router.get('/', playersCtrl.index);
router.get('/new', playersCtrl.new);
router.post('/', playersCtrl.create)


module.exports = router;