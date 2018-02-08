import axios from "axios"

const suplist = {
    namespaced:true,
    state: {
        suplist: [],
    },
    getters: {
        suplist: state=> state.suplist,
    },
    mutations: {
        setSuplist(state, payload){
            state.suplist = payload.suplist
        }
    },
    actions: {
        getSuplist(context, payload){
            axios("http://localhost:8000/api/foodlist/getListData").then(res=>{
                console.log(res.data)
                context.commit("setSuplist",{suplist: res.data})
            })
        }
    }
}

export default suplist