const express = require('express');
const superagent = require('superagent');
require('superagent-charset')(superagent)
const cheerio = require('cheerio');
const fs = require("fs");
// 文件流
var server=express();
//引入route模块
const router  = require("./router/admin.js");
server.use(router);
//5.监听端口
server.listen(8821,(req,res)=>{
    console.log('Server running at http://127.0.0.1:8821/')
});