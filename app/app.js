/*jshint esversion: 6 */
//var http = require('http');
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

var port = app.get('port');

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(port, function() {
  console.log('listening on port ' + port);
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
