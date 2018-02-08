var pool = require("./pool");

class banner {
  constructor(){}//构造器
  getListData(params,callback){
    pool.getConnection((err,connection)=>{
      if(err) throw err;
      connection.query(`select * from banner`,(err,results)=>{
        if(err) throw err;
        //获取到数据会掉用回调
        callback(results)
//      console.log(results)
//      console.log(results)
        connection.release()
      })
    })
  }
}
module.exports = Banner;