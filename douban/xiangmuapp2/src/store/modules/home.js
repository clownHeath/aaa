
import axios from "axios"

const config = {
  namespaced:true,
  state:{
    classify:{},
    classifyimg:{},
    classifyimg1:{}
  },
  getters:{
    // 获取/分拣/计算/ 组件需要的数据（方便组件使用store里面的数据）
    classify: state=>state.classify,
    classifyimg: state=>state.classifyimg,
    classifyimg1: state=>state.classifyimg1
  },
  mutations:{
    setClassify(state,payload){
        state.classify = payload.classify
    },
     setClassifyimg(state,payload){
        state.classifyimg = payload.classifyimg
    },
     setClassifyimg1(state,payload){
        state.classifyimg1 = payload.classifyimg1
    },
  },
  actions:{
    getClassify(context,payload){//获取数据  执行action 和服务器交互
        axios("http://localhost:8000/api/cate/getcateData").then(res=>{//提交给motation 修改数据               
            context.commit("setClassify",{classify:res.data})
            // console.log(res)
        })
    },
    getClassifyimg(context,payload){//获取数据  执行action 和服务器交互   
        axios("http://localhost:8000/api/classify/getListData?parent_id=9").then(res=>{//提交给motation 修改数据               
           context.commit("setClassifyimg",{classifyimg:res.data})
           // console.log(res.data)
           
       })
    },
    getClassifyimg1(context,payload){//获取数据  执行action 和服务器交互 
        axios("http://localhost:8000/api/classify/getListData?parent_id=10").then(res=>{//提交给motation 修改数据               
            context.commit("setClassifyimg1",{classifyimg1:res.data})
            // console.log(res.data)
           
        })
    }
  }

    }
export default config