var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
	/*if(req.url == '/form-submit'){
		var chunks = [];
		req.on('data', function (chunk){ 
			chunks.push(chunk); 
		});
		req.on('end', function(){
			var data = Buffer.concat(chunks);
			var dataAsString = data.toString('utf8');
			//console.log(dataAsString);
			//var formattedData = decodeURIComponent(dataAsString);
			//console.log(formattedData);
			var dataAsArray = formattedData.split('&');
			var finalData = [
				dataAsArray[0].split('='),
				dataAsArray[1].split('=')
			]
		res.end('Your '+finalData[0][0]+' is ' +finalData[0][1] + ' and your '+finalData[1][0] + ' is ' + finalData[1][1]);
		});
	}else{*/
	res.writeHead(200,{'content-type':'text/html'});
	var theHomePageHTML = fs.readFileSync('index.html');
	res.write(theHomePageHTML);
	res.end();
	//}
}).listen(3000);

console.log("Server is listening for HTTP traffic at port 3000...");