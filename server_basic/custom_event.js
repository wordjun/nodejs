/*
nodejs는 이벤트 기반 비동기 방식의 서버 framework임.

-eventemitter: nodejs의 모든 event처리가 정의된 기본 객체
    이벤트 사용 위해선 이 객체를 재정의해서 사용

-on(): 이벤트를 연결하는 함수. 이전장에서 request객체에
    on함수를 이용해 'data'라는 이벤트를 캐치해 사용했었는데
    모든 이벤트처리는 이런 동일한 루틴을 거쳐 사용하게 됨

-emit(): 이벤트를 발생시킴. on()에서 'data'라는 이벤트가
    캐치되려면 emit('data')의 형태로 이벤트를 발생시켜야 함
*/

//event가 정의돼 있는 events모듈 생성
var eventemitter = require('events');

//생성된 이벤트 모듈을 사용하기 위해 custome_object로 초기화
var custom_object = new eventemitter();

//events모듈에 선언돼 있는 on()함수를 재정의, 'call'이벤트 처리
custom_object.on('call', () =>{
    console.log('called events');
});

//'call'이벤트 강제로 발생
custom_object.emit('call');