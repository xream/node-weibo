node-weibo
==========

>grant_type: 'password'


  	var weibo = new Weibo();
  	// 得到access_token
  	weibo.access_token('your_username', 'your_password');
  	// 状态
	weibo.update('your_access_token', '中文测试')
	// 图片
	weibo.upload('your_access_tokenB', '中文测试3', '/Users/xream/tmp/test.png')