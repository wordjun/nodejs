var module = require('./custom_module');

//formatted 특수문자 %d사용해 module.sum()에서 리턴된 숫자 출력
console.log('sum = %d', module.sum(10));

//formatted 특수문자 %s를 사용해 module.var1의 문자값을 출력
console.log('var1 = %s', module.var1);
console.log('sample string: ' + module.string);