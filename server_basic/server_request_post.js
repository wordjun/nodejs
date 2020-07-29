var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    //post로 전달된 데이터를 담을 변수를 선언
    var postdata ='';

    //request객체에 on()함수로 'data이벤트를 연결
    //on함수로 'data'라는 이벤트를 catch함
    request.on('data', function(data){
        //data이벤트 발생시마다 callback을 통해 postdata변수에 값 저장
        postdata = postdata + data;
    });

    //request객체에 on함수로 'end'이벤트를 연결
    request.on('end', function(){
        //end이벤트 발생 시 (end는 단 한번만 발생)
        //postdata를 querystring을 통해 객체화
        var parsedQuery = querystring.parse(postdata);

        //객체화된 데이터를 로그로 출력
        console.log(parsedQuery);

        //성공 header와 데이터를 담아 client에 응답처리
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('var1의 값 = ' + parsedQuery.var1);
    });
});

//서버를 구동시키는 함수
server.listen(8080, function(){
    console.log('Server\'s running..');
});

/*
GET과 다른점: event 처리부분
node.js는 일반적인 웹서버의 thread동기방식이 아닌 비동기적 event방식으로
데이터 처리. on()함수를 통해 event를 등록하고 해당 event가 발생하는 시점에
logic을 실행하는 구조.


listen과 on의 차이점: on은 이벤트의 명칭을 정의한다는 것. 특정 이벤트가
발생해야지만 해당 이벤트가 발생한 시점에 logic실행.

data이벤트는 전송하는 데이터의 크기가 길 경우 여러번에 나눠 발생
end 이벤트는 data전송이 완료됐을때 한번만 발생

*/