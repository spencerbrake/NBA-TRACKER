const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');
console.log(playersCtrl)

router.get('/', playersCtrl.index);
router.get('/new', playersCtrl.new);
router.get('/:id', playersCtrl.show);
router.post('/', playersCtrl.create);
router.delete('/:id', playersCtrl.delete);


module.exports = router;