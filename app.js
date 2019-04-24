const express = require('express');
var cors = require('cors');
var testroute = require('./routes/test');
var foodroute= require('./routes/food');
var fodmaproute= require('./routes/fodmaps');

var app = express();
app.use(cors());
var port = 3001

app.use('/', testroute);
app.use('/foods', foodroute);
app.use('/fodmaps', fodmaproute);

app.listen(port, () => {
    console.log('listening on port ' + port);
})