var http = require("http");
var fs = require("fs");
var obj;
fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
if (err) return console.error(err);

});



http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(data.toString());
  response.end();
}).listen(8081);
console.log('Server running.');