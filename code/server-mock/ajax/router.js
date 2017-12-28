/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /query
 * 返回响应数据
 */
app.get('/a/b/c/d/friends', function(req, res) {
	//req.query 可以获取请求参数
	var username = req.query.username
	var ret = ['nobody']
	if(username == 'ruoyu'){
		ret = ['小明', '小刚']
	}
	setTimeout(function(){
		res.send(ret) 
	},3000)
	//res.send(ret)  //res.send用于发送数据

});




/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	var username = req.query.username
	var friends
	if(username == 'ruoyu'){
		friends = ['小明', '小刚']
	}else {
		friends = ['nobody']
	}

	res.render('user.ejs', {
		friends: friends
	});
});
