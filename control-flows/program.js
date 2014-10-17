
var async = require('async');
var request = require('request');

var urls = [
    'http://192.168.1.37:9000/number.php?number=1',
    'http://192.168.1.37:9000/number.php?number=2',
    'http://192.168.1.37:9000/number.php?number=3',
    'http://192.168.1.37:9000/number.php?number=4',
    'http://192.168.1.37:9000/number.php?number=5',
    'http://192.168.1.37:9000/number.php?number=6'
];

async.map(urls,
    function(url, callback) {
        console.log('> Req ' + url);
        request(url, function(err, response, data) {
            console.log('< Res ' + url);
            return callback(err, data);
        });
    },
    function(err, results) {
        if(err) throw err;
        for(var i = 0; i < results.length; i++) {
            console.log(parseInt(results[i], 10));
        }
    }
);