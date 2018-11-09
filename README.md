# JSONP 跨域实例分析，前端调用和后端接口设置
	项目安装及运行
	
	# 安装项目依赖
	npm install

	# 启动服务 
	node server.js
	
	
	1、后端接口提供跨域支持；接口返回参数构成：回调函数名+数据  ；如果返回值格式不对，浏览器报错如：跨域请求报错 Uncaught SyntaxError: Unexpected token :
	
		var result = jsoncallback +"("+JSON.stringify(jsonData)+")";//JSONP返回值格式
			
		
	2、express 设置跨域资源共享，允许跨域访问;nginx 等也可以设置
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By",' 3.2.1')
		res.header("Content-Type", "application/json;charset=utf-8");
	
	3、打开jsonp.html 或者  jsonpJq.html   查看跨域访问结果
	
	4、接口测试：
		4.1 http服务建立测试：
		http://127.0.0.1:8095/
		
		4.2 jsonp接口地址：
		http://127.0.0.1:8095/jsonp
		
		4.3 允许跨域访问的get请求地址：
		http://127.0.0.1:8095/data
		
		
		
		
		
		
		
		
		
		
		
		