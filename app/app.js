//var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1> Express Works</h1>');
});

var server = app.listen(3000, function() {
  console.log('listening on port 3000');
});

// var myServer = http.createServer(function(req, res) {
//   res.writeHead(200, {
//     "cotent-Type": "text/gtml"
//   });
//   res.write('<h1>Hello Guys</h1>');
//   res.end();
// });
//
// myServer.listen(3000);
// console.log("Go to http://localhost:3000");
