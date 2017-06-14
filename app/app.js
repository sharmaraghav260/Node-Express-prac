/*jshint esversion: 6 */
//var http = require('http');
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

var port = app.get('port');

app.get('/', function(req, res) {
  res.send(`
    <h1> Hello Guys,</h1>
    <p> Welcome to an application built with Node and Express.</p>
  `);
});

app.get('/speakers', function(req, res) {
  var info = "";
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2> ${item.name} </h2>
      <p > ${item.summary}</p>
    </li>
    `;
  });
  res.send(`
    <h1> Express Works</h1>
    ${info}
  `);
});

app.get('/speakers/:speakerid', function(req, res) {
  var speaker = dataFile.speakers[req.params.speakerid];
  res.send(`
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `);
});

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
