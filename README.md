node-weibo
==========

>grant_type: 'password'


  	var weibo = new Weibo();
  	// 得到access_token
  	weibo.access_token('your_username', 'your_password');
  	// 状态
	weibo.update('your_access_token', '中文测试状态')
	// 图片
	weibo.upload('your_access_token', '中文测试图片', '/Users/xream/tmp/test.png')
	// api访问频率限制情况
	weibo.rate('your_access_token')