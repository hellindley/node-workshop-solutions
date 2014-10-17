
var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.queue('node-workshop-queue', function(queue) {
        queue.bind('node-workshop', '#');
        queue.subscribe({ ack: true }, function(message) {
            console.log('Message received:', message);
            queue.shift();
        });
    });
});