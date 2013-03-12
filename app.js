var needle = require('needle'),
  utils = require('./utils');

function Weibo(options){
  var defaults = {
    user_agent: 'Dalvik/1.6.0 (Linux; U; Android 4.2.1; Nexus 4 Build/JOP40D) WeiboAndroidSDK',
    client_id: 211160679,
    client_secret: '63b64d531b98c2dbff2443816f274dd3',
    grant_type: 'password',
    access_token_url: 'https://api.weibo.com/oauth2/access_token',
    update_url: 'https://api.weibo.com/2/statuses/update.json',
    upload_url: 'https://upload.api.weibo.com/2/statuses/upload.json'
  };
  this.options = utils.merge(defaults, options);
}

Weibo.prototype.access_token = function(username, password){
  var url = this.options.access_token_url,
    options = {
      headers: {
        'User-Agent': this.options.user_agent
      }
    },
    data = {
      username: username,
      password: password,
      client_id: this.options.client_id,
      client_secret: this.options.client_secret,
      grant_type: this.options.grant_type
    };
  needle.post(url, data, options, function(err, res, body){
    if (err) {
      console.log(err);
    } else if (res && res.statusCode != 200) {
      console.log(res.statusCode);
      console.log(body);
    } else {
      var body = JSON.parse(body);
      console.log('fetching access_token:\n'+JSON.stringify(body, undefined, 2));
      console.log('expires_in: '+body.expires_in.toString());
      console.log('access_token: '+body.access_token.toString());
    };
  });
};

Weibo.prototype.update = function(access_token, status){
  var url = this.options.update_url,
    options = {
      headers: {
        'User-Agent': this.options.user_agent,
        Authorization: 'OAuth2 '+access_token,
      }
    },
    data = {
      status: status
    };
  needle.post(url, data, options, function(err, res, body){
    if (err) {
      console.log(err);
    } else if (res && res.statusCode != 200) {
      console.log(res.statusCode);
      console.log(body);
    } else {
      console.log('update:\n'+JSON.stringify(body, undefined, 2));
    };
  });
};

Weibo.prototype.upload = function(access_token, status, pic){
  var url = this.options.upload_url,
    options = {
      headers: {
        'User-Agent': this.options.user_agent,
        Authorization: 'OAuth2 '+access_token,
      },
      multipart: true
    },
    data = {
      status: encodeURIComponent(status),
      pic: { file: pic, content_type: 'image/png' }
    };
  needle.post(url, data, options, function(err, res, body){
    if (err) {
      console.log(err);
    } else if (res && res.statusCode != 200) {
      console.log(res.statusCode);
      console.log(body);
    } else {
      console.log('upload:\n'+JSON.stringify(body, undefined, 2));
    };
  });
};