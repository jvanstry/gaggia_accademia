var applicationRoot = __dirname;
var pkg = require('./package.json');
var config = require('./config.json');
var path = require('path');
var fs = require('fs');
var express = require('express');

var app = express();
var port = process.env.port || 8080; 

app.set('view engine', 'ejs');
app.use(express.static(applicationRoot + '/public'));

app.get('/', function(req, res) {
    res.render('pages/index', {
      title: 'JVS - Gaggia Accademia Exercise'
    });
});

app.listen(port);