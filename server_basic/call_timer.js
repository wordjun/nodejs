var module = require('./custom_module_timer');

//module내부에 선언된 timer객체를 통해 tick이벤트를 캐치,
//event발생 시마다 현재시간 출력

module.timer.on('tick', function(time){
    var time = new Date();
    console.log(time);
});