var express = require('express');
var router = express.Router();

var List= require("../models/list2");
var myList = new List()

//商品列表
router.get('/getListData', function(req, res, next) {
    myList.getListData(req.query,function(listData){
    res.send(JSON.stringify(listData))
  })
});

module.exports = router;