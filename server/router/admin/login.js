const express = require("express");
const router = express.Router();
var dbmodel = require("../../router/db.js")
const jwt = require('jsonwebtoken');
router.post("/",function (req,res) {
    dbmodel.findMongo("user",{"phone":req.body.phone, "password":req.body.password},function(err,result){
        if(err){
            res.send("查询失败");
            result;
        }else{
            if(result.length>0){
                let content ={name:req.body.phone}; // 要生成token的主题信息
                let secretOrPrivateKey="suiyi" // 这是加密的key（密钥） 
                let token = jwt.sign(content, secretOrPrivateKey, {
                        expiresIn: 60*60*1  // 1小时过期
                    });
                dbmodel.updateMongo("user",{"phone":req.body.phone},{'token':token},function(err){
                    if (err) {
                        res.status(500).send()
                        return
                    }
                    res.send({'code':0,'msg':'登陆成功','date':{'userInfo':result[0]}})     //反给前台
                })
            }else{
                res.send({'code':100,'msg':'登录失败'});
            }
        }
    })
});




router.get("doLogin",function (req,res) {
    res.send("登录1页面")
});
module.exports = router;