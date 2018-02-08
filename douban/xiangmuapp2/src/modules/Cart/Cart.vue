<template>
    <div class="cart_ye">
        <div class="no_goods" v-show="sss">
            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt="">
            <p>看到喜欢的就带回家吧</p>
            <router-link to="/List">今日推荐</router-link>
        </div>
        <div class="cart_head">
            <a href="javascript:history.go(-1);" class="iconfont icon-jiantou"></a>
            <span>购物车</span>
            <h4>
                <span @click="ischagneView(cartData)" v-if="aaa">完成</span>
                <span @click="ischagneView(cartData)" v-else="aaa">编辑</span>
            </h4>
        </div>
        <div class="cart_box" v-show="!sss">
            <ul>
                <li v-for="(ele, index) in cartData" :key="index">

                    <div class="wrap">
                        <img :src="ele.cart_img" alt="" style="width:100px;">
                        <section>
                            <h2>{{ele.p_name}}</h2>
                            <i>{{ele.indNum}}</i>
                            <h4>
                                <span>{{ele.ber_price}}</span>
                                <del>{{ele.price}}</del>
                            </h4>
                            <h5>
                                <a href="javascript:;" v-show="aaa" @click="reduceNum({ele, index})" :class="{'prohibit':ele.isProhibit}">－</a>
                                <span class="goods_num">
                                    <i v-show="!aaa">×</i>
                                    {{ele.number}}
                                </span>
                                <a href="javascript:;" v-show="aaa" @click="addNum({ele, index})">+</a>
                            </h5>
                        </section>
                        <b  
                            :class="ele.isGoods?'iconfont icon-xuanzhong':'iconfont icon-webicon206'" 
                            @click="click_goods({index, ele})" >
                        </b>
                        <div style="clear:both;"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cart_footer">
            <h4 @click="whole({isSelect:total.isSelect})">
                <b :class="total.isSelect?'iconfont icon-xuanzhong':'iconfont icon-webicon206'" ></b>
                <span>全选</span>
            </h4>
            <h6 v-show="aaa" @click="removeGood(cartData)">删除</h6>
            <i v-show="aaa">移入收藏夹</i>
            <p v-show="!aaa">
                <span class="p_t">合计 <em>{{total.total_price}}</em></span>
                <br>
                <span>
                    总额
                    <em>{{total.total_price}}</em>
                    会员立减
                    <em>44</em>
                </span>
            </p>
            <router-link to="/Order" v-show="!aaa">结算({{total.total_num}})</router-link>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mapGetters,mapActions } from 'vuex'
    import {Toast} from 'mint-ui'
    import { MessageBox } from 'mint-ui'
    
    export default {
        name: 'Cart',
        computed: {
            ...mapGetters("cart",[
                "cartData","total","aaa","sss"
            ]),
        },
        methods: {
            ...mapActions("cart",[
                "getCartData","click_goods","click_shop","whole","addNum","reduceNum","ischagneView","removeGood"
            ])
        },
        mounted() {
            this.getCartData()
        },
    }    
</script>
<style scoped>
    .no_goods{
        margin-top: 51px;
        width: 100%;
        vertical-align: middle;
        text-align: center;
    }
    .no_goods img{
        width: 40%;
        margin-top: 20px;
    }
    .no_goods p{
        font-size: 14px;
        color: #333;
        line-height: 20px;
    }
    .no_goods a{
        font-size: 12px;
        color: #ff464e;
        padding: 6px 20px;
        border: 1px solid #ff464e;
        display: inline-block;
        margin-top: 10px;
    }
    .cart_ye{
        height: 100%;
        overflow: auto;
        background: #ebebeb;
    }
    .cart_head{
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #ebebeb;
        background: #fff;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: space-between;
        align-items: center;
        z-index: 999999999999999999;
    }
    .cart_head a{
       padding: 0 10px;
       z-index: 99999999;
    }
    .cart_head h4 span{
       padding: 0 10px;
       z-index: 99999999;
    }
    .cart_box{
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        margin-top: 50px;
    }
    .cart_box ul{
        width: 100%;
        height: auto;
        background: #f4f4f8;
    }
    .cart_box ul li{
        width: 80%;
        padding-left: 15%;
        padding-right: 5%; 
        margin-bottom: 10px;
        background: #fff;
    }
    .cart_box ul li .tit{
        width: 100%;
        border-bottom: #ebebeb;
        font-size: 14px;
        color: #666;
        line-height: 40px;
        position: relative;
    }
    .cart_box ul li .tit i{
        width: 100%;
        border-bottom: #ebebeb;
        font-size: 14px;
        color: #666;
        line-height: 40px;
        margin-right: 10px;
    }
    .cart_box ul li .wrap {
        width: 100%;
        padding: 15px 0;
        position: relative;
    }
    .cart_box ul li .wrap img{
        width: 100px;
        float: left;
    }
    .cart_box ul li .wrap section{
        float: left;
        width: 60%;
        margin-left: 10px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }
    .cart_box ul li .wrap section h2{
        font-size: 14px;
        color: #333;
        line-height: 20px;
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .cart_box ul li .wrap section h4{
        margin-bottom: 10px;
    }
    .cart_box ul li .wrap section h4 span{
        font-size: 14px;
        color: #ff464e;
        line-height: 20px;
    }
    .cart_box ul li .wrap section h4 del{
        font-size: 12px;
        color: #bbb;
        line-height: 20px;
    }
    .cart_box ul li .wrap section h5{
        position: absolute;
        right: 0;
        bottom: 10px;
        height:20px;
    }
    .cart_box ul li .wrap section h5 a{
        float: left;
        height: 20px;
        width: 20px;
        background: #f4f4f8;
        line-height: 20px;
        text-align: center;
        margin: 0 5px;
        color: #ff464e;
        /* display: none;  */
    }
    .cart_box ul li .wrap section h5 .goods_num{
        font-size: 12px;
        color: #bbb;
        line-height: 20px;
        display: block;
        float: left;
    }
    .cart_box ul li .wrap section h5 .goods_num i{
        font-size: 18px;
        line-height: 20px;
        height: 20px;
        display: block;
        float: left;
    }
    .cart_box ul li .tit b{
        position: absolute;
        right: 0;
        bottom: 10px;
        font-size: 16px;
        color: #ff464e;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        left: -12%;
    }
    .cart_box ul li .wrap b{
        position: absolute;
        right: 0;
        bottom: 10px;
        font-size: 16px;
        color: #ff464e;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        left: -12%;
        top: 45%;
    }
    .cart_footer{
        height: 45px;
        width: 100%;
        background: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .cart_footer h4{
        float: left;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: #333;
        width: 19%;
        text-align: right;
    }
    .cart_footer h4 b{
        right: 0;
        bottom: 10px;
        font-size: 16px;
        color: #ff464e;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 45px;
    }
    .cart_footer p{
        height: 40px;
        float: left;
        margin-top: 5px;
        width: 50%;
        text-align: right;
    }
    .cart_footer p .p_t{
        font-size: 14px;
        color: #666;
        display: inline-block;
        line-height: 20px;
    }
    .cart_footer p .p_t em{
        font-size: 14px;
        color: #ff464e;
        line-height: 20px;
    }
    .cart_footer p span{
        font-size: 12px;
        display: inline-block;
        color: #999;
        line-height: 20px;
    }
    .cart_footer a{
        height: 45px;
        width: 31%;
        background:#ff464e;
        line-height: 45px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        float: left;
    }
    .cart_footer i{
        float: right;
        height: 45px;
        /* width: 15%; */
        font-size: 18px;
        line-height: 45px;
        text-align: center;
        padding: 0 10px;
        background: #f6a623;
        color:#fff;
        font-weight: 100;
    }
    .cart_footer h6{
        float: right;
        height: 45px;
        /* width: 15%; */
        background: #ff464e;
        font-size: 18px;
        color:#fff;
        line-height: 45px;
        padding: 0 25px;
        text-align: center;
        font-weight: 100;
    }
    .prohibit{
        pointer-events: none;
        color: #ccc!important;
    }
</style>
