const express = require("express");
const router = express.Router();
//相当于后台的路由，所有的后台处理都需要从这里经过

const login = require("./admin/login");
const product = require("./admin/product");
const getList = require("./admin/getList");

router.use("/login",login);
router.use("/product",product);
router.use("/book",getList);


module.exports = router;