var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
      res.write(data);
      res.end();
  });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
