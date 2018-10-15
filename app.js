var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// app.use(express.bodyParser());
app.use(bodyParser.json());
console.log("working");

app.get('/', function(req, res){
  res.send('hello world');
});

app.post('/api', function (req, res) {
  res.send(req.body);
  console.log("sj",req.body);
});

app.listen(3000);

