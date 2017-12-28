
var age = 10
var name = 'ruoyu'

function sayName (){
  console.log(name + '的年纪是' + age)
}


module.exports = {
  sayName: sayName,
  age: age
}


/*

moduleb = (function(){

  var age = 10
  var name = 'ruoyu'

  function sayName (){
    console.log(name + '的年纪是' + age)
  }
   
  return {
    sayName: sayName
  }
})()



modulea = (function(){

  var age = 10
  var name = 'ruoyu'

  function sayName (){
    console.log(name + '的年纪是' + age)
  }
   
  return {
    sayName: sayName
  }
})()




function require(moduleMame){
  return window['module'+moduleMame]
}

require('a').sayName()

*/

