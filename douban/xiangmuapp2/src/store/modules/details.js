import axios from "axios"
import {Toast} from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
    namespaced:true,
    state: {
        cartData: [],
        prodlist: {
            banner_img:"[]",
            tw:"",
            good_m_c:[]
        },
        total_num: 0,  //商品数量
        add_num: 1,  //添加数量
        isProhibit: true, //能否点击减少按钮
        indNum: 0,
        popupVisible: false
    },
    getters: {
        // banner_img: state=> JSON.parse(state.prodlist.img_list),
        banner_img: state=> eval(state.prodlist.img_list),
        tw: state=> state.prodlist.desc,
        prodlist: state=> state.prodlist,
        good_m_c: state=> eval(state.prodlist.good_m_c),
        cartData: state=>state.cartData,
        total_num: state=> state.total_num,
        add_num: state=> state.add_num,
        isProhibit: state=>state.isProhibit,
        indNum: state=> state.indNum,
        popupVisible: state => state.popupVisible
    },
    mutations: {
        setProdList(state, payload){    
            state.prodlist = payload.prodlist
        },
        setCartData(state, payload){
            state.cartData = payload.cartData
            if( state.total_num == 0){      //初始商品数量
                state.cartData.forEach(ele=>{
                    state.total_num += ele.number   
                })
            }else{
                state.total_num = 0  //在cart返回时，会继续叠加
                state.cartData.forEach(ele=>{
                    state.total_num += ele.number
                })
            }
        },
        addCart(state, payload){    
            state.popupVisible = !state.popupVisible    //关闭弹出框
            state.total_num += state.add_num  //点击算数量
            Toast("添加到购物车")
        },
        xunze(state, payload){ //关闭弹出框
            state.popupVisible = ! state.popupVisible
        },
        addNum(state, payload){ //添加数量
            state.add_num += 1
            if( state.add_num > 1){
                state.isProhibit = false
            }
        },
        reduceNum(state, payload){  //减少
            state.add_num = state.add_num - 1
            if( state.add_num == 1){
                state.isProhibit = true
            }
            
        },
        de_index(state, {index}){  //选择尺码
            state.indNum = index
        }
    },
    actions: {
        getProdList(store, context, payload){ //详情页数据
            var id = context 
            axios("http://localhost:8000/api/product/getDetailData?pid="+id).then(res=>{
                store.commit("setProdList",{prodlist:res.data})
            })
        },
        getCartData(context, payload){  //购物车数据
            var uid = JSON.parse(localStorage.userinfo).uid
            axios("http://localhost:8000/api/cart/getListData?uid="+uid).then(res=>{
                // console.log(res.data.cartData)
                context.commit("setCartData",{cartData:res.data.cartData})
            })
        },
        addCart({commit}, {pid, add_num}){   //添加商品
            var number = add_num
            var uid = JSON.parse(localStorage.userinfo).uid
            axios("http://localhost:8000/api/cart/add?uid="+uid+"&pid="+pid+"&number="+number).then(res=>{
                    if(res.data.msgCode == 1){
                        commit("addCart")
                    }else{
                        Toast("网路错误")
                    }
                })
        },
        xunze({commit}, payload){   //关闭弹出框
            if(JSON.parse(localStorage.userinfo).username){
                commit("xunze")
            }else{
                this.$router.history.push("/Login")
            }
        },
        addNum({commit}, payload){   //增加按钮
            commit("addNum")
        },
        reduceNum({commit}, payload){   //减少按钮
            commit("reduceNum")
        },
        de_index({commit}, {index}){  //选择尺码
            commit("de_index", {index:index})
        }
    }
}
