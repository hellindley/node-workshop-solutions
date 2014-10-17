
var express = require('express');
var expressBodyParser = require('body-parser');
var mysql = require('mysql');
var expressHandleBars = require('express-handlebars');
var util = require('util');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'nodeworkshop',
    password: 'nodeworkshop',
    database: 'nodeworkshop'
});

connection.connect();

var app = express();
app.engine('handlebars', expressHandleBars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(expressBodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    return res.render('form');
});

app.post('/', function(req, res) {
    connection.query('INSERT INTO name_jobs SET ?', req.body, function(err, result) {
        if(err) {
            res.status(500);
            return res.send(err.message);
        }
        return res.redirect('/result/' + result.insertId);
    });
});

app.get('/result/:id', function(req, res, next) {
    connection.query('SELECT * FROM name_jobs WHERE id = ?', req.params.id, function(err, rows) {
        if(err) {
            res.status(500);
            return res.send(err.message);
        }
        return res.render('result', rows[0]);
    });
});

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
});