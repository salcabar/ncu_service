/**
 * 简单的数据库访问对象
 */

var mysql = require('mysql');
var  Q = require('q')



var connection = mysql.createConnection({
  host     : '55c0c57423304.sh.cdb.myqcloud.com',
  user     : 'cdb_outerroot',
  password : 'xzw199228',
  port : 4124
});


var pool  = mysql.createPool({
      host     : '55c0c57423304.sh.cdb.myqcloud.com',
      user     : 'cdb_outerroot',
      password : 'xzw199228',
      database : 'ncu',
      port     : '4124'
});

//console.log('pool' , pool);

function Dao(){}

var exec = function(query , params , successFn , errorFn){
    var deferred = Q.defer();
    successFn = successFn || function(val){ return val;}
    errorFn = errorFn || function(val){return val;}
    pool.getConnection(function(err, connection) {
      if(err) {
         deferred.reject('pool getConnection error');
         return;
      }
      connection.query(query, params , function(error, result) {
        if(error){
            console.log(error);
            deferred.reject(errorFn(error));
        }else{
            deferred.resolve(successFn(result));
        }
        connection.release();
      });
    });
    return deferred.promise;
}

Dao.prototype.insert = function(insertQuery , params){
    return exec(insertQuery , params , function(result){
        return result.insertId;
    });
}

Dao.prototype.update = function(updateQuery , params){
    return exec(updateQuery , params , function(result){
        console.log('update change rows' , result.changedRows);
        return result.changedRows;
    });
}

Dao.prototype.query =   function(query , params){
    return exec(query , params , function(result){
        return result;
    });
}

Dao.prototype.delete = function(delQuery , params){
    return exec(delQuery , params , function(result){
        return results.affectedRows;
    });
}


module.exports = new Dao();