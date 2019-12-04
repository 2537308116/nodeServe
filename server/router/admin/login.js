const express = require("express");
const router = express.Router();
var dbmodel = require("../../router/db.js")
router.get("/",function (req,res) {
    dbmodel.findMongo("user",{},function(err,result){
        if(err){
            res.send("查询失败");
            result;
        }
        console.log(result)
        res.send(result);
    })
    // res.send("登录页面")
});
router.get("doLogin",function (req,res) {
    res.send("登录1页面")
});
module.exports = router;