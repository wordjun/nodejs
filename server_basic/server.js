//서버 사용을 위해 http모듈을 http변수에 담음
//모듈과 변수의 이름은 달라도 상관없다
var http = require('http');

//앞서 생성한 모듈로 서버를 생성
//서버 생성 후 사용자로부터 http요청이 들어오면 function 블럭{} 내부의
//코드를 실행하여 응답함
var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('Hello node.js');
});

//listen함수로 8080포트를 가진 서버를 실행.
//서버실행을 확인하기 위해 문장 출력
server.listen(8080, function(){
  console.log('Server currently running...');
});