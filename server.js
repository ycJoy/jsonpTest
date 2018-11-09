/*
	1、参考express文件托管、路由设置   http://www.expressjs.com.cn/
	2、jsonp 跨域测试：后台接口设置支持ajax跨域请求
	3、

*/

var express = require('express');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');//在nodejs中，提供了querystring这个模块，用来做url查询参数的解析

var app = express();


app.get('/', function (req, res) {
	res.send('Hello World!');
});

// 1、jsonp跨域测试
app.get('/jsonp', function (req, res) {
	var reqUrl = url.parse(req.url);
	console.log("url==="+JSON.stringify(reqUrl));
	var obj = querystring.parse(reqUrl.query);
	var jsoncallback = obj.jsoncallback || ''; ////获取jsonp  回调函数名
	console.log("jsoncallback==="+jsoncallback);
	var jsonData = {"status":"success","jsonp":"this is a jsonp test"};
	var result = jsoncallback +"("+JSON.stringify(jsonData)+")";//JSONP返回值格式
		
	res.send(result);
});

// 2、
app.get('/data', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

	
	var reqUrl = url.parse(req.url);
	//console.log("url==="+JSON.stringify(reqUrl));
	var obj = querystring.parse(reqUrl.query);
	var jsoncallback = obj.jsoncallback ||  "";// || 'callbackFunction'; ////获取jsonp  回调函数名
	
	var jsonData = {"status":"success","jsonp":"this is a jsonp test"};
	var result = jsoncallback +"("+JSON.stringify(jsonData)+")";//JSONP返回值格式
		
	res.send(JSON.stringify(jsonData));//
});

var server = app.listen(8095, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://localhost:' + port + '\n')
	
});