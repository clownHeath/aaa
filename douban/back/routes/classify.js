var express = require('express');
var router = express.Router();

var Classify= require("../models/classify");
var myClassify = new Classify()

//商品列表
router.get('/getListData', function(req, res, next) {
    myClassify.getListData(req.query,function(listData){
    res.send(JSON.stringify(listData))
  })
  
});

module.exports = router;