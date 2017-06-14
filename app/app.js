var http = require('http');

var myServer = http.createServer(function(req, res) {
  res.writeHead(200, {
    "cotent-Type": "text/gtml"
  });
  res.write('<h1>Hello Guys</h1>');
  res.end();
});

myServer.listen(3000);
console.log("Go to http://localhost:3000");
