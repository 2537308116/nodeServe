const express = require("express");
const router = express.Router();
router.get("/",function (req,res) {
    res.send("商品首页")
});
router.get("/add",function (req,res) {
    res.send("商品首页")
});
router.get("/delete",function (req,res) {
    res.send("商品首页")
});
module.exports = router;