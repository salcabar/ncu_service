
var  dao = require('./db')
var  Q = require('q')
var uuid = require('node-uuid');


function pageMgr(){

    /**
     * 得到所有页面
     * @param {Object}queryParams {
                    start:'查询的起点'
                    ,count:'查询的数量'
                    ,user_id:"用户"
                    ,order :'排序列'
                    ,orderby:'desc|asc'
                }
     */
    this.getAllApps = function(queryParams){
        var deferred = Q.defer();
        queryParams = queryParams || {};
        var start = queryParams.start || 0;  //查询开始
        var count = queryParams.count || 10; //查询数量
        var order = queryParams.order || 'id';
        var orderby = queryParams.orderby || 'desc';
        var query = "select * from appinfo where 1=1 ";
        var user_id = queryParams.user_id
        var params = [];
        if(user_id){
            query += ' and user_id = ?  order by '+order+' '+orderby;
            params.push(user_id);
        }
        query +=  " limit ? , ?"

        params.push(start);
        params.push(count);
        console.log('query' , query);
        console.log('query param' , params);
        var promise = dao.query(query , params);
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

    /**
     * 创建一个页
     * @param title 页面标题
     * @param descr 页面描述
     * @param user_id  创建用户id
     * @return pageId  返回当前也的一个id
     */
    this.createApp = function(title , descr , user_id){
        var deferred = Q.defer();
        var insertQuery = 'insert into appinfo(uid , user_id , publish_url , title , descr , ctime) value(?,?,?,?,?,?)';
        var params = [];
        var uid = uuid.v1();
        params.push(uid);
        params.push(0);
        params.push("");
        params.push(title);
        params.push(descr||"");
        params.push(new Date());
        var promise = dao.insert(insertQuery , params);
        promise.then(function(id){
             deferred.resolve(uid);
        },function(err){
             deferred.reject(err);
        })
        return deferred.promise;
    }

    /**
     * 查询一个页的数据
     * @param appid 页id
     */
    this.getApp = function(appid){
        var deferred = Q.defer();
        var  query = "select * from appinfo where uid = ?";
        var params = [];
        params.push(appid);
        var promise = dao.query(query , params);
        promise.then(function(result){
            deferred.resolve(result[0]);
        } , function(error){
            deferred.reject(error);
        }).catch(function(error){
            deferred.reject(error);
        })
        return deferred.promise;
    }

    /**
     * 发布一个页
     */
    this.publish = function(uid){
    }

    /**
     * 更新页数据
     */
    this.updateApp = function(appid , pageData , customData){
        var deferred = Q.defer();
        var  query = "update appinfo  set content = ? , custom_data = ? where uid = ?";
        var params = [];
        params.push(pageData);
        params.push(customData);
        params.push(appid);
        var promise = dao.update(query , params);
        promise.then(function(result){
            deferred.resolve(result);
        } , function(error){
            deferred.reject(error);
        }).catch(function(error){
            deferred.reject(error);
        })
        return deferred.promise;
    }

    /**
     * 创建一个页
     * @param title 页面标题
     * @param descr 页面描述
     * @param user_id  创建用户id
     * @return pageId  返回当前也的一个id
     */
    this.createActiveUserInfo = function(active_id, name , location , time){
        var deferred = Q.defer();
        var insertQuery = 'insert into location(active_id , name , location , time) value(?,?,?,?)';
        var params = [];
        params.push(active_id);
        params.push(name);
        params.push(location);
        params.push(time);
        var promise = dao.insert(insertQuery , params);
        promise.then(function(msg){
            console.log(msg)
             deferred.resolve(msg);
        },function(err){
             deferred.reject(err);
        })
        return deferred.promise;
    }
}

module.exports = pageMgr;

