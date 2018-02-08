var pool =require('./pool')


class Classify{
    constructor(){}
    getListData({parent_id},callback){
        console.log(parent_id)
        var id = parent_id||9
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query("select * from classify where parent_id="+id,function(err,results){
                callback(results)
                //释放连接
                connection.release()    
            })
        })
    } 
}

module.exports = Classify