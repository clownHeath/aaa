var pool =require('./pool')


class List2{
    constructor(){}
    getListData({parent_id},callback){
        // console.log(parent_id)
        var id = parent_id||14
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query("select * from list2 where parent_id="+id,function(err,results){
                // console.log(results)
                callback(results)
                //释放连接
                connection.release()    
            })
        })
    } 
}

module.exports = List2