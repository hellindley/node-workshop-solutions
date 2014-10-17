
var fs = require('fs');

for(var i = 0; i < 500; i++) {
    fs.readFile(process.argv[2], 'utf-8', function(err, contents) {
        if(err) throw err;
    });
}