const express = require("express");
const router = express.Router();
var dbmodel = require("../admin/login.js")
router.get("/",function (req,res) {
    dbmodel.findMongo("student",{"score.shuxue":100},function(err,result){
        if(err){
            res.send("查询失败");
            result;
        }
        res.send(result);
    })
    // res.send("登录页面")
});
router.get("doLogin",function (req,res) {
    res.send("登录1页面")
});
module.exports = router;