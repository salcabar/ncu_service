var express = require('express');
var router = express.Router();

var PageMgr = require('../libs/pageMgr');
var utils = require('../libs/utils');
var pageMgr = new PageMgr();
//得到page列表
router.get('/' , function(req, res, next){
    
    var params = {};
    params.count = parseInt(req.query.page_count || 10);
    params.start = (req.query.page_size || 10) * (req.query.page || 0);
    params.order = req.query.order
    params.orderby = req.query.orderby
    params.user_id = 0;
    var posimise = pageMgr.getAllApps(params);
    posimise.then(function(apps){
        res.json(utils.wrapResponse(1,apps,''))
    } , function(err){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    }).catch(function(error){
         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    });

});

/**
 * 通过appid得到app数据
 */
router.get('/:id', function(req, res, next){
    
    var id = req.params.id;
    if(!id){
        res.json(utils.wrapResponse(0 , null , "请填写App Id"));
        return;
    }
    var promise = pageMgr.getApp(id);
    promise.then(function(app){
       var ret = utils.wrapResponse(1, app ,'');
       res.json(ret)
    }, function(){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    }).catch(function(error){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    });
});


/**
 * 创建一个数据
 */
router.post('/', function(req, res, next){
    
    var active_id = req.body.active_id;
    var name = req.body.name;
    var location = req.body.location;
    var time = req.body.time;
    var promise = pageMgr.createActiveUserInfo(active_id, name , location , time);
    promise.then(function(){
        res.json(utils.wrapResponse(1,null,'成功'))
    } , function(error){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    }).catch(function(error){
         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    });
});

/**
 * 修改数据
 */
router.put('/', function(req, res, next){
    
    var  id = req.body.id;
    var content = req.body.content;
    var custom_data = req.body.custom_data;
    console.log('content', content);
    var promise = pageMgr.updateApp(id , content, custom_data);
    promise.then(function(count){
        res.json(utils.wrapResponse(1,{'changedRows':count},''))
    },function(error){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    }).catch(function(error){
         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    });
});


module.exports = router;
