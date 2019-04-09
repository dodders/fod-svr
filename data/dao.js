var fs = require('fs');
var fodmaps_data = JSON.parse(fs.readFileSync('./data/fodmaps.json', encoding="utf8"));
var foods_data = JSON.parse(fs.readFileSync('./data/foods.json', encoding="utf8"));

exports.getFodMaps = function() {
    return fodmaps_data;
}

exports.getFoods = function() {
    return foods_data;
}