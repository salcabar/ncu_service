
var  dao = require('./db')
var  Q = require('q')
var uuid = require('node-uuid');


function manageMgr(){

    /**
     * 得到所有页面
     */
    this.getAllDatas = function(){
        var deferred = Q.defer();
        var query = "select * from person_info";
        var params = [];
        var promise = dao.query(query, params);
        promise.then(function(result){
            //这里需要转换成appInfo对象
            deferred.resolve(result);
        } , function(error){
            deferred.reject(error);
        }).catch(function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    }
}

module.exports = manageMgr;

