
import axios from "axios"

const config = {
  namespaced:true,
  state:{
    kind:{},
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    kind:state=>state.kind 
  },
  mutations:{
    setKind(state,payload){
        state.kind = payload.kind
    }
  },
  actions:{
     getKind(context,payload){//获取数据  执行action 和服务器交互
        axios("http://localhost:8000/api/list/getListData").then(res=>{//提交给motation 修改数据               
            context.commit("setKind",{kind:res.data})
            console.log(res)
        })
    }   
  }
}
export default config