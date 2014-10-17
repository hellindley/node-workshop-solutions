
var express = require('express');
var expressBodyParser = require('body-parser');
var expressHandleBars = require('express-handlebars');
var http = require('http');
var socketio = require('socket.io');
var util = require('util');

var app = express();
app.engine('handlebars', expressHandleBars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(expressBodyParser.urlencoded({ extended: false }));

var server = http.Server(app);
var io = socketio(server);

app.get('/', function(req, res) {
    return res.render('chat');
});

io.on('connection', function (socket) {
    socket.on('send_message', function(data) {
        console.log(data);
        io.sockets.emit('message', data);
    });
});

var server = server.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
});