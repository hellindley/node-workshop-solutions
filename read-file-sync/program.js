
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2], 'utf-8');
var lines = contents.split('\n').length;
console.log(lines);