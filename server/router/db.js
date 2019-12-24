var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/test";

/**
 * 打开数据库
 * @param callback  回调函数
 */
function clientMongo(callback){
    MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },function(err,client){
        callback(err,client);
    });
}

/**
 * 查询
 * @param mongoTable  集合名称
 * @param paramJSON   查询条件
 * @param C    回调函数
 * @param D    分页参数
 */
exports.findMongo = function(mongoTable,paramJSON,D,C){
    var argm = arguments;
    //打开数据库
    clientMongo(function(err,client){
       
        if(argm.length==4){
            var agrs = D;
            var callback = C;
            var skipnumber = parseInt((agrs.page-1)*agrs.pageSize) || 0;
            var limitnumber = parseInt(agrs.pageSize) || 0;
            var sort = agrs.sort || {};
        }else if(argm.length == 3){
            var callback = D;
            var skipnumber = 0;
            var limitnumber = 0;
            var sort = {};
        }else{
            return;
        }
        if(err){
            callback(err,null);
            return;
        }
       var db = client.db("test");
        db.collection(mongoTable).find(paramJSON).skip(skipnumber).limit(limitnumber).sort(sort).toArray(function(err,result){
            callback(err,result);
            client.close();
        })
    })
}


/**
 * 修改数据
 * @param mongoTable  集合名称
 * @param paramJSON   要修改的原数据的值
 * @param param    要修改成的数据的值
 * @param callback    回调函数
 */
exports.updateMongo = function(mongoTable,paramJSON,param,callback){
    var argm = arguments;
    //打开数据库
    clientMongo(function(err,client){
       
        if(err){
            callback(err,null);
            return;
        }
       var db = client.db("test");
        db.collection(mongoTable).updateMany(paramJSON,{$set:param},function(err,data){
            if(err) throw err;
            callback(err,data)
            console.log("数据更新成功")
            client.close();
        })
    })
}

