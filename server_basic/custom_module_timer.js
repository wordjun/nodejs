var eventemitter = require('events');

var sec = 1;

//timer변수를 eventemitter로 초기화
exports.timer = new eventemitter();

//javascript 내장함수인 setInterval을 사용해
// 1초에 한번씩 timer객체에 tick이벤트 발생
setInterval(function(){
    exports.timer.emit('tick');
}, sec * 1000);