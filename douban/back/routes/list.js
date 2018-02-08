var express = require('express');
var router = express.Router();

var List= require("../models/list");
var myList = new List()

//商品列表
router.get('/getListData', function(req, res, next) {
  // console.log(res)
  myList.getListData(function(listData){
    // console.log(listData)
    res.send(JSON.stringify(listData))
  })
});
//商品列表
router.get('/getListData', function(req, res, next) {
  myList.getCateData(req.query,function(listData){
    res.send(JSON.stringify(listData))
  })
  
});

module.exports = router;