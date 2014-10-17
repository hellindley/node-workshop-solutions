
var fs = require('fs');

return fs.readFile(process.argv[2], 'utf-8', function(err, contents) {
    if(err) throw err;
    var lines = contents.split('\n').length;
    console.log(lines);
});