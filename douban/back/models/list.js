var pool =require('./pool')


class List{
    constructor(){}
    getListData(callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query("select * from list",function(err,results){
                // console.log(results)
                var data = [];
                results.forEach(ele=>{
                    // console.log(ele.parent_id || ele.list_id)
                    if(ele.parent_id == 0 ){
                        // console.log(11)
                        ele.children = [];
                        data.push(ele)          
                    }else {
                        // console.log(data)
                        data.forEach((cate,index)=>{
                            if(cate.list_id==ele.parent_id){
                                data[index].children.push(ele)                               
                            }
                        })
                    }
                })
                callback(data)
                //释放连接
                connection.release()    
            })
        })
    }
}

module.exports = List