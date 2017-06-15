/*jshint esversion: 6 */
//var http = require('http');
var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

var port = app.get('port');

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));


var server = app.listen(port, function() {
  console.log('listening on port ' + port);
});

reload(server, app);

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
