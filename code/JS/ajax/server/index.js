
var http = require('http')

var server = http.createServer(function(req, res){
  console.log(req)
  res.write('hello world')
  res.end()
})

server.listen(3000)