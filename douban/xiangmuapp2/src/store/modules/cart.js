import axios from "axios"
import {Toast} from 'mint-ui'
import { MessageBox } from 'mint-ui'

const good = {
    namespaced:true,
    state: {
        cartData: [],
        aaa: false,
        sss: false
    },
    getters: {
        cartData: state=>state.cartData,
        aaa: state=>state.aaa,
        sss: state=>state.sss,
        total: state=> {
            var total_price = 0
            var total_num = 0
            // let isSelect = true  //全选
            if(state.cartData.length == 0){
                var  isSelect = false
            }else{
                var isSelect = true
                state.cartData.forEach(ele=>{    //总价，数量，全选按钮
                    if(ele.isGoods){     //选中之后算总价，数量
                        total_price += ele.ber_price*ele.number
                        total_num += ele.number
                    }             
                    if(!ele.isGoods){  //单选控制全选
                        isSelect = false
                    }
                })
            }

            total_price = total_price.toFixed(2) //浮点
            return {
                total_num, total_price, isSelect
            }
        }
    },
    mutations: {
        setCartData(state, {cartData}){
            cartData.forEach(ele=>{
                if(ele.number == 1){
                    ele.isProhibit = true   //自己添加一个状态,是否可以点击减少按钮
                }else{
                    ele.isProhibit = false
                }
            })
            state.cartData = cartData
            if(state.cartData.length == 0){
                state.sss = true
            }else{
                state.sss = false
            }
        },
        click_goods(state, {index, ele}){   //单选
            state.cartData[index].isGoods = !state.cartData[index].isGoods
        },
        whole(state, {isSelect}){   //全选控制
            state.cartData.forEach(ele=>{
                ele.isGoods = !isSelect
            })
        },
        ischagneView(state, {sss}){  //控制样式
            console.log(state.aaa)
            state.aaa = !state.aaa
            if( state.aaa ){
                sss.forEach(ele=>{
                    ele.isGoods = false
                })
            }else{
                sss.forEach(ele=>{
                    ele.isGoods = true
                })
            }
        }
    },
    actions: {
        getCartData({commit}, payload){
            var uid = JSON.parse(localStorage.userinfo).uid
            axios("http://localhost:8000/api/cart/getListData?uid="+uid).then(res=>{
                // console.log(res)
                commit("setCartData",{cartData:res.data.cartData})
            })
        },
        addNum(context, {ele, index}){ //增加数量
            var uid = localStorage.userinfo.uid
            var cart_id = ele.cart_id
            var number = ele.number+1
            if(number > 1){
                ele.isProhibit = false
            }
            ele.number = number  //改变数据库
            var params = "uid="+uid+"&cart_id="+cart_id+"&number="+number
            axios.post("http://localhost:8000/api/cart/changeNumber",params).then(res=>{console.log(1)})
        },
        reduceNum(context, {ele, index}){ //减少数量
            var uid = JSON.parse(localStorage.userinfo).uid
            var cart_id = ele.cart_id
            var number = ele.number-1       
            if(number == 1){ 
                number = 1
                console.log(ele.isProhibit)
                ele.isProhibit = true
            }
            ele.number = number
            var params = "uid="+uid+"&cart_id="+cart_id+"&number="+number
            axios.post("http://localhost:8000/api/cart/changeNumber",params).then(res=>{
                
            })
        },
        click_goods({commit}, {index, ele}){  //商品单选
            //解构赋值，用到哪个传哪个
            commit("click_goods", {index, ele})
        },
        whole(context, {isSelect}){  //全选
            context.commit("whole",{isSelect:isSelect})
        },
        ischagneView({commit}, payload){
            commit("ischagneView",{sss:payload})
        },
        removeGood({commit}, payload){ //删除
            var cart_id = ""
            payload.forEach(ele=>{
                if(ele.isGoods == true){
                    cart_id = ele.cart_id
                }
            })
            if(!cart_id){
                Toast("请至少选择一个商品")
                return 
            }
            var uid = JSON.parse(localStorage.userinfo).uid
            var params = "cart_id="+cart_id+"&uid="+uid
            MessageBox.confirm('Are you sure?',{
                message: '宝贝库存有限，确定要删除吗？'
            }).then(action=>{
                axios.post("http://localhost:8000/api/cart/removeItem",params).then(res=>{              
                    location.reload() //刷新当前页面
                })
            }).catch(err=>{
                if(err == "cancel"){
                    return
                }
            })
        }
    }
}

export default good