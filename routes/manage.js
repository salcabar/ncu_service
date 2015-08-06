var express = require('express');
var router = express.Router();
var fs = require("fs");

var manageMgr = require('../libs/manageMgr');
var utils = require('../libs/utils');
var json2csv = require('json2csv');
var manageMgr = new manageMgr();
var data = null;

var fields = ['id', 'name' , 'grade' , 'college' , 'Major' , 'company' , 'job' , 'phone' , 'weixin' , 'qq' , 'district' , 'city' , 'address' , 'club'];

//得到所有数据
router.get('/' , function(req, res, next){
    console.log(11111)
    var posimise = manageMgr.getAllDatas();
    posimise.then(function(apps){
        res.json(utils.wrapResponse(1,apps,''))
        return apps;
    } , function(err){
        res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    }).catch(function(error){
         res.json(utils.wrapResponse(0,null,JSON.stringify(error)));
    }).then(function(data){
        console.log(111,data[0])
        json2csv({ data: data, fields: fields }, function(err, csv) {
          if (err) console.log(err);
          fs.writeFile('public/file.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
          });
        });
    })

});


module.exports = router;
