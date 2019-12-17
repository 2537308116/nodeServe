const express = require('express');
// const superagent = require('superagent');
// require('superagent-charset')(superagent)
// const cheerio = require('cheerio');
// const fs = require("fs");
var bodyParser = require('body-parser')
var proxy = require('http-proxy-middleware');
// 文件流
var server=express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//引入route模块
const router  = require("./router/admin.js");

server.use(router,proxy({target: 'http://localhost:3000', changeOrigin: true}));
//5.监听端口
server.listen(8824,(req,res)=>{
    console.log('Server running at http://127.0.0.1:8824/')
});