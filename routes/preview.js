var express = require('express');
var router = express.Router();
var PageMgr = require('../libs/pageMgr');
var pageMgr = new PageMgr();
var utils = require('../libs/utils');
var device = require('../libs/device')


var getDeviceType = function(ua , detector){
    var type = 'pc';
    var de = detector.device.name;
    var os = detector.os.name;
    var browser = detector.browser.name;
    var devices = '|pc|mac|na|';
    var tablet = !!(de === 'ipad' ||
        (os === 'android' && !ua.match(/Mobile/)) ||
        (browser === 'firefox' && ua.match(/Tablet/)));
    var phone = !!(!tablet && (devices.indexOf('|' + de + '|') < 0) && os !== 'linux');

    if (tablet) {
      type = 'pad';
    }

    if (phone) {
      type = 'mobile';
    }
    return  type;
}

//预览
router.get('/:id' , function(req, res, next){
    console.log(arguments)
    var ua = req.headers['user-agent'];
    var d = device.parse(ua);
    var device_type = getDeviceType(ua , d);
    console.log('device_type' , device_type)
    var id = req.params.id;
    var promise = pageMgr.getApp(id);
    promise.then(function(app){
       if(!app || !app.content){
          res.end('没有数据');
          return;
       }
       try{
          var appdata = JSON.parse(app.content);
          var customData = app.custom_data;
          var width = appdata.properties.width || 0;
          res.set('Content-Type', 'text/html');
          res.render('preview', { 'app_data': JSON.stringify(appdata) , 'width':width, 'device_type':'pad', 'custom_data': customData});
       }catch(error){
           console.log(error);
           res.end('显示错误');
       }
    }, function(){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    });

});
module.exports = router;