
var fs = require('fs');

for(var i = 0; i < 500; i++) {
    var contents = fs.readFileSync(process.argv[2], 'utf-8');
}