var applicationRoot = __dirname;
var fs = require('fs');

var productData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(applicationRoot + '/public'));

app.get('/', function(req, res) {
  var abbrevDesc = productData.overview["Product Description"].substr(0, 410) + "...";

  res.render('pages/index', {
    title: 'JVS - Gaggia Accademia Exercise',
    productData: productData,
    abbreviatedDescription: abbrevDesc
  });
});

app.listen(port);
