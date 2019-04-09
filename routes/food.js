var express = require('express');
var dao = require('../data/dao');

var router = express.Router();

//food home - get list of foods
router.get('/', (req, res) => {
    res.send(dao.getFoods());
})

module.exports = router