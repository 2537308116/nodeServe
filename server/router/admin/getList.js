const express = require("express");
const router = express.Router();
var dbmodel = require("../../router/db.js")
// var utils = require("../../utils/index.js")

const superagent = require('superagent');
require('superagent-charset')(superagent)
const cheerio = require('cheerio');



router.get("/getList",function (req,res) {
    superagent.get('https://www.book900.com/')
     .charset('gbk')
     .end((err, sres) => {
       // 常规的错误处理
       if (err) {
         return next(err);
       }
       let list=[]
       // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
       // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
       // 剩下就都是 jquery 的内容了
       let $ = cheerio.load(sres.text);
       $('.Con .Left .bw_box .pic a').each((idx, element) => {
         let $element = $(element);
         list.push({
           title: $element.attr('title'),
           href: $element.attr('href'),
           img:$element.children('img').attr('data-original')
         });
       });
       res.send({'code':0,'msg':'请求成功','data':list});
     });
});




module.exports = router;