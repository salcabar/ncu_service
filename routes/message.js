var express = require('express');
var router = express.Router();

var messageMgr = require('../libs/messageMgr');
var utils = require('../libs/utils');
var messageMgr = new messageMgr();
//得到所有数据
router.get('/all' , function(req, res, next){
    console.log(11111)
    var posimise = pageMgr.getAllApps();
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
// router.get('/:id', function(req, res, next){

//     var id = req.params.id;
//     if(!id){
//         res.json(utils.wrapResponse(0 , null , "请填写App Id"));
//         return;
//     }
//     var promise = pageMgr.getApp(id);
//     promise.then(function(app){
//        var ret = utils.wrapResponse(1, app ,'');
//        res.json(ret)
//     }, function(){
//         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
//     }).catch(function(error){
//         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
//     });
// });


/**
 * 创建一个数据
 */
router.post('/', function(req, res, next){
    console.log(222222222222222222222);
    var obj = {
        name : req.body.name,
        grade : req.body.grade || '',
        college : req.body.college || '',
        major : req.body.major || '',
        company : req.body.company || '',
        job : req.body.job || '',
        phone : req.body.phone || '',
        weixin : req.body.weixin || '',
        qq : req.body.qq || '',
        district : req.body.district || '',
        city : req.body.city || '',
        address : req.body.address || '',
        club : req.body.club || ''
    }

    var promise = messageMgr.createMailList(obj);
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
// router.put('/', function(req, res, next){

//     var  id = req.body.id;
//     var content = req.body.content;
//     var custom_data = req.body.custom_data;
//     console.log('content', content);
//     var promise = pageMgr.updateApp(id , content, custom_data);
//     promise.then(function(count){
//         res.json(utils.wrapResponse(1,{'changedRows':count},''))
//     },function(error){
//         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
//     }).catch(function(error){
//          res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
//     });
// });


module.exports = router;
