var http = require('http');
var fs = require("fs");
var ifile = "./myjson.json";

var myjson = JSON.parse(fs.readFileSync(ifile));


console.log(JSON.stringify(myjson));
 
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(JSON.stringify(myjson));
    response.end();
    
}).listen(3030);



