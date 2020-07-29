var http = require('http')//http module

//요청한 url을 객체로 만들기 위해 url 모듈 사용
var url = require('url');

//요청한 url중에 query string을 객체로 만들기 위해
//query string모듈 사용
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    console.log('*****log start*****');

    //브라우저에서 요청한 주소(주소창에 있는 string)를 parsing하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);

    //객체화된 url중 query string부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);


    
    
    console.log('*****log end*****');

    response.writeHead(200, {'Content-Type':'text/html'});
    //response.end('Hi node.js');
    response.end('var1: '+parsedQuery.var1
    + ' var2: '+parsedQuery.var2+' var3: '+parsedQuery.var3);
});

server.listen(8080, function(){
    console.log('Server\'s Running...');
});