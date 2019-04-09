var express = require('express');
var dao = require('../data/dao');

var router = express.Router();

//fodmaps home - get list of foods
router.get('/', (req, res) => {
    res.send(dao.getFodMaps());
})

module.exports = router