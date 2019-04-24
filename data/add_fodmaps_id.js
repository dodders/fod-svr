var fs = require('fs')

console.log('starting...');
var fods = JSON.parse(fs.readFileSync('fodmaps.json', encoding="utf8"));
var newfods = fods.map( (fod, idx) => {
    fod.id = idx;
    return fod;
})
console.log(newfods);
fs.writeFileSync('newfodmaps.json', JSON.stringify(newfods));
console.log('done.');