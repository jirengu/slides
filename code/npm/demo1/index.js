
var a = 1;
console.log(a)

var sayHello = require('./a').sayHello
sayHello('ruoyu')

var marked = require('marked')
var str = marked('# hello')
console.log(str)