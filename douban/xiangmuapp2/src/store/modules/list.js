import axios from "axios"

const list = {
    namespaced:true,
    state: {
        listdata:[]
    },
    getters:{
        // 获取/分拣/计算/ 组件需要的数据（方便组件使用store里面的数据）
        listdata: state=>state.listdata
      },
    mutations: {
        setListData(state,payload){
            state.listdata = payload.listdata
        }
    },
    actions: {
        getListData(store, context, payload){
            // var id = this.$route.params.list_id;
            var id = context.list_id
            if(!id){
                axios("http://localhost:8000/api/list2/getListData").then(res=>{
                    store.commit("setListData",{listdata:res.data})
                })
            }else{
                axios("http://localhost:8000/api/list2/getListData?parent_id="+id).then(res=>{
                    store.commit("setListData",{listdata:res.data})
                    console.log(res.data)
                })
            }
        }
    }
}

export default list;