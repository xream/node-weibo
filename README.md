node-weibo
==========

>grant_type: 'password'

	
	var Weibo = require('./Weibo');
	var weibo = new Weibo();	
	weibo.access_token('your_username', 'your_password', function(access_token) {
		// 得到access_token
  		console.log(access_token)  		
	});
	
  	// 状态
	weibo.update('your_access_token', '中文测试状态')
	// 指定一个图片URL地址抓取后上传并同时发布一条新微博
	weibo.upload_url_text('your_access_token', '中文测试图片加微博', 'http://xxx.png')
	// 图片	
	weibo.upload('your_access_token', '中文测试图片', '/Users/xream/tmp/test.png')
	// api访问频率限制情况
	weibo.rate('your_access_token')
	// 长链接转换成短链接
	weibo.shorten('your_access_token', 'url_long')
  	