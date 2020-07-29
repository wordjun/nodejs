var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    console.log(request.url);
    var parsedUrl = url.parse(request.url);

    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);

    if(resource == '/address'){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('Inha Univ., Incheon');
    }
    else if(resource == '/phone'){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('010-8344-3284');
    }
    else if(resource == '/name'){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('Jun Hyun Park');
    }
    else{
        response.writeHead(404, {'Content-Type':'text/html'});
        response.end('404 Page Not Found');
    }
});

server.listen(80, function(){
    console.log('Server is running..');
});