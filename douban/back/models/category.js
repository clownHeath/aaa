var pool =require('./pool')


class ClassModel{
    constructor(){}
    getListData(callback){
        pool.getConnection(function(err,connection){
            console.log(111)
            if(err) throw err;
            connection.query("select * from category",function(err,results){
                console.log(111)
                var data = [];
                results.forEach(ele=>{
                    console.log(data)
                    if(!ele.parent_id){
                        ele.children = [];
                        data.push(ele)
                    }else {
                        // console.log(data)
                        data.forEach((cate,index)=>{
                            if(cate.cate_id==ele.parent_id){
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
     getCateData(params,callback){
        pool.getConnection(function(err,connection){
            console.log(params.parent_id)
            if(err) throw err;
            var parent_id = params.parent_id ||0 
            connection.query("select * from category where parent_id="+parent_id,function(err,results){
                callback(results)
                //释放连接
                connection.release()    
            })
        })
    }
}

module.exports = ClassModel