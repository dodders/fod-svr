var express = require('express');
var router = express.Router();

//test home 
router.get('/', (req, res) => {
    res.send('hello world.\n');
})

//test about
router.get('/about', (req, res) => {
    res.send('about - Time: ' + Date.now() + '\n');
})

module.exports = router