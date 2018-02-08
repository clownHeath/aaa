var express = require('express');
var router = express.Router();

var Foodlist= require("../models/foodlist");
var myFoodlist = new Foodlist()

//商品列表
router.get('/getListData', function(req, res, next) {
    myFoodlist.getListData(function(listData){
    console.log(listData)
    res.send(JSON.stringify(listData))
  })
});

module.exports = router;