var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
	res.writeHead(200,{'content-type':'text/html'});
	var theHomePageHTML = fs.readFileSync('index.html');
	res.write(theHomePageHTML);
	res.end();
}).listen(3000);

console.log("Server is listening on port 3000...");