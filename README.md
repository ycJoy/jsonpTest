# JSONP 跨域实例分析，前端调用和后端接口设置
	项目安装及运行
	
	# 安装项目依赖
	npm install

	# 启动服务 
	node server.js
	
	
	1、后端接口提供跨域支持，动态获取回调函数名称；接口返回参数构成：回调函数名+数据  ；
		如果返回值格式不对，浏览器报错如：跨域请求报错 Uncaught SyntaxError: Unexpected token :
	
		var result = jsoncallback +"("+JSON.stringify(jsonData)+")";//JSONP返回值格式		
		
	2、express 设置跨域资源共享，允许跨域访问;nginx 等也可以设置
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By",' 3.2.1')
		res.header("Content-Type", "application/json;charset=utf-8");
	
	3、打开  jsonp.html 或者  jsonpJq.html   查看跨域访问结果
		主要代码：
		
		//1、getJSON---方式：自动生成随机回掉函数值--后台需要设置为根据字段（jsoncallback）获取回掉函数名
		$.getJSON("http://127.0.0.1:8095/jsonp?jsoncallback=?",
		function(data) {
			console.log("1、jQuery  getJSON 方式跨域返回值==" + JSON.stringify(data));
			$('#jsonp1').html("1、jQuery  getJSON 方式跨域返回值==" + JSON.stringify(data));
		});

		//2、ajax---方式：设置 dataType:"jsonp",自己定义回掉函数名称 --后台需要设置为根据字段（jsoncallback）获取回掉函数名
		$.ajax({
			type: "get",
			url: "http://127.0.0.1:8095/jsonp",
			dataType: "jsonp",//设置jsonp请求方式
			jsonp: "jsoncallback",
			jsonpCallback: "callbackFunction",//自己定义回掉函数名称
			success: function(data) {
				console.log("2、jQuery  ajax 方式跨域返回值==" + JSON.stringify(data));
				$('#jsonp2').html("2、jQuery  ajax 方式跨域返回值==" + JSON.stringify(data));
			},
			error: function() {
				alert("请求出错！");
			}
		});
		
	
	4、接口测试：
		4.1 http服务建立测试：
		http://127.0.0.1:8095/
		
		4.2 jsonp接口地址：
		http://127.0.0.1:8095/jsonp
		
		4.3 允许跨域访问的get请求地址：
		http://127.0.0.1:8095/data
		
		
		
		
		
		
		
		
		
		
		
		