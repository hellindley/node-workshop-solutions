
var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.exchange('node-workshop', { "confirm": true }, function(exchange) {
        console.log('Exchange ' + exchange.name + ' is open');
        setInterval(function() {
            var message = Date.now();
            exchange.publish('timestamp', message, {}, function() {
                console.log('Message published:', message);
            });
        }, 1000);
    });
});