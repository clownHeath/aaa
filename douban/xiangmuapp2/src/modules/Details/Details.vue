<template>
    <div>
        <div class="de_content">
            <div class="banner">      
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(ele, index) in banner_img" :key="index">
                        <img v-lazy="ele" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="huiyuan">     
                <h3>
                    <span class="price">￥{{prodlist.ber_price}}</span>
                    <del class="ber_price">￥{{prodlist.price}}</del>
                </h3>
                <span class="yigou">{{prodlist.purchase}}人已购</span>  
            </div>
            <div class="biaoti">
                <div class="p_name">{{prodlist.p_name}}</div>
                <a href="jsvascript:;" class="iconfont icon-wdeshouchangweixuanzhong"></a>  
            </div>
            <div class="kong"></div>
            <div class="xunhuan">
                <ul>
                    <li class="ber">
                        <span class="name">会员</span>
                        <span class="youhui">仅需10元开通会员 ，此商品立减<i>10</i>元</span>
                        <a href="jsvascript:;" class="iconfont icon-dayuhao"></a>
                    </li>
                    <li class="zhuanshu">
                        <span class="hy_zs">专属折扣</span>
                        <span class="hy_zs">专属商品</span>
                        <span class="hy_zs">专属礼品</span>
                        <a href="jsvascript:;" class="iconfont icon-more1"></a>
                    </li>
                </ul> 
            </div>
            <div class="kong"></div>
            <div class="yanse">
                    <ul>
                        <li>已选择：</li>
                        <li>{{prodlist.good_option}}</li>
                        <li>{{good_m_c[indNum]}}</li>
                        <li>
                            <a href="jsvascript:;" class="iconfont icon-dayuhao"></a>
                        </li>
                    </ul>
            </div>
            <div class="kong"></div>
            <div class="dianpu">
                <h3>
                    <img :src="prodlist.img_url" />
                </h3>
                <h4>
                    <span>{{prodlist.shop_name}}</span>
                    <i>共<b>{{prodlist.shop}}</b>件商品</i>
                </h4>
                <a href="javaseript:;">
                    进入店铺
                    <i class="iconfont icon-dayuhao"></i>
                </a>
            </div>
            <div class="kong"></div>
            <div class="good_nav">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">图文详情</mt-tab-item>
                    <mt-tab-item id="2">商品参数</mt-tab-item>
                    <mt-tab-item id="3">咨询与售后</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="selected" style="height:300px;">
                    <mt-tab-container-item id="1" >
                        <div v-html="tw" id="tw"></div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <ul class="nav_canshu">
                            <li v-for="ele in canshu">
                                <span>{{ele.tit}}</span>
                                <b>{{ele.answer}}</b>
                            </li>
                        </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        33
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
        <div class="de_footer">
                <router-link to="/">
                    <img src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" alt="">
                    <i>首页</i>
                </router-link>
                <b @click="judgePath()" class="p_d_cart">
                    <img src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" alt="">
                    <i>购物车</i>
                    <span class="cart_num">{{total_num}}</span>
                </b>
                <b @click="judgePath()">立即购买</b>
                <b @click="xunze()" class="jiaru" >加入购物车</b>

                <mt-popup
                    v-model="popupVisible"
                    position="bottom"
                    closeOnClickModal="false"
                    style="width:100%;"
                >
                   <div  class="box" >                     
                        <div class="cart_wrap">
                            <section>
                                <img :src="prodlist.cart_img" alt="">
                                <h4>
                                    <span>￥{{prodlist.ber_price}}</span>
                                    <h3 class="xuanze">请选择 {{prodlist.good_class}} {{prodlist.good_model}}</h3>
                                    <p @click="xunze()">
                                        <img src="https://web.juanpi.com/static/media/del.bbe4aea1.png" alt="">
                                    </p>
                                </h4>
                            </section>
                            <section>
                                <span>{{prodlist.good_class}}</span>
                                <i class="active_color">{{prodlist.good_option}}</i>
                                <span>{{prodlist.good_model}}</span>
                                <ul>
                                    <li v-for="(ele, index) in good_m_c" 
                                        :key="index" 
                                        @click="de_index({index})" 
                                        :class="index==indNum?'active_color':''"
                                    >
                                        {{ele}}
                                    </li>
                                </ul>
                                <div class="good_num">
                                    <span>购买数量</span>
                                    <div>
                                        <span @click="reduceNum()" :class="{'prohibit':isProhibit}" >-</span>
                                        <span>{{add_num}}</span>
                                        <span @click="addNum()">+</span>
                                    </div>
                                </div>
                            </section>
                            <section @click="addCart({pid, add_num})">确定</section>
                        </div>
                    </div>
                </mt-popup>
        </div> 
    </div>
    
</template>
<script>
    import axios from 'axios'
    import { mapGetters, mapActions } from 'vuex'
    import {Toast} from 'mint-ui'
    export default {
        name: 'Details',                                        
        data () {
            return {
                r_link: '/Cart',
                pid: '',
                selected: 0,
                canshu:[
                    {
                        tit: "常用快递",
                        answer: "圆通速递"
                    },
                    {
                        tit: "运费",
                        answer: "全国包邮(偏远地区除外)"
                    },
                    {
                        tit: "纺织类材质",
                        answer: "其他"
                    },
                    {
                        tit: "尺码",
                        answer: "M,L,XL"
                    },
                    {
                        tit: "服装版型",
                        answer: "修身"
                    },
                    {
                        tit: "纺织服装款式",
                        answer: "口袋，连帽"
                    },
                    {
                        tit: "元素",
                        answer: "口袋"
                    },
                    {
                        tit: "领型",
                        answer: "连帽"
                    },
                    {
                        tit: "衣长",
                        answer: "中长款"
                    },
                    {
                        tit: "填充物",
                        answer: "其他"
                    },
                    {
                        tit: "袖长",
                        answer: "长袖"
                    },
                    {
                        tit: "服装风格",
                        answer: "欧美简约"
                    },
                    {
                        tit: "图案",
                        answer: "纯色"
                    },
                    {
                        tit: "厚薄",
                        answer: "常规"
                    }
                ]
            }
        },
        computed:{
            ...mapGetters("details",[
                "prodlist","cartData","banner_img","good_m_c","tw","total_num","add_num","isProhibit","indNum","popupVisible"
            ])
        },
        methods:{
            ...mapActions("details",[
                "getProdList","getCartData","addCart","xunze","addNum","reduceNum","de_index"
            ]),
            judgePath(){  //立即购买跳转
                if(JSON.parse(localStorage.userinfo).username){
                    this.$router.history.push("/Cart")
                }else{
                    this.$router.history.push("/Login")
                }
            }
        },
        mounted () {
            this.pid = this.$route.params.pid  //商品ID
            this.getProdList(this.pid)
            this.getCartData() 
        }
    }
</script>
<style scoped>
    /*  */
    .de_content {
        margin-bottom: 50px;
    }
    /* good_nav 图文详情  商品参数  售后 */
    .good_nav {
        width: 100%;
    }
    .good_nav .nav_canshu {
        width: 100%;
    }
    .good_nav .nav_canshu li{
        width: 90%;
        margin:0 5%;
        float: left;
    }
    .good_nav .nav_canshu li span{
        color: #bbb;
        font-size: 14px;
        line-height: 30px;
        float: left;
        width: 20%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
    }
    .good_nav .nav_canshu li b{
        color: #4a4a4a;
        font-size: 14px;
        line-height: 30px;
        float: left;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    /* 弹出框  设置高度，才有弹出的动画效果 */
    .de_footer .mint-popup-bottom{
        height: 320px;
    }
    /* 按钮样式 */
    .de_footer .box section .active_color{
        color: #fff;
        background: #ff464e;
        border:1px solid #fff;
    }
    .box{
        height:320px;
        width: 100%;
        background: #fff;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #e1e1e1;
    }
    .cart_wrap{
        height:320px;
        bottom: 0;
        width: 100%;
        background: #fff;
        position: absolute;
    }
    .box section:nth-child(1){
        width: 100%;
        height: 20%;
        position: relative;
        /* background: red; */
    }
    .box section:nth-child(1) img{
        width: 80px;
        height: 80px;
        position: absolute;
        left: 10%;
        bottom: 0;
    }
    .box section:nth-child(1) h4{
        height: 100px;
        margin-left: 35%;
        display: flex;
        flex-direction: column;
    }
    .box section:nth-child(1) h4 span{
        font-size: 16px;
        color: #ff464e;
        line-height: 25px;
        font-weight: 600;
        margin-top: 5px;
    }
    .box section:nth-child(1) h4 .xuanze{
        font-size: 12px;
        color: #666;
        line-height: 20px;
    }
    .box section:nth-child(1) h4 p{
        position: absolute;
        right: 10px;
        top: 0;
        width: 20px;
        height: 30px;
    }
    .box section:nth-child(1) h4 p img{
        width: 20px;
        height: 20px;
    }
    .box section:nth-child(2){
        width: 80%;
        height: 60%;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        margin-left: 10%;
        margin-right: 10%;
    }
    .box section:nth-child(2) span{
        font-size: 16px;
        color: #333;
        line-height: 32px;
    }
    .box section:nth-child(2) i{
        font-size: 14px;
        color: #000;
        line-height: 20px;
        background: #fff;
        height: 20px;
        width: 80px;
        text-align: center;   
        border: 1px solid #333;
    }
    .box section:nth-child(2) ul li{
        float: left; 
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #333;
        margin-right: 5%;
        width: 30%;
        border:1px solid #333;
        background: #fff;
        box-sizing: border-box;
    }
    .box section:nth-child(2) ul li:nth-child(3n+0){
        margin-right: 0;
    }
    .box section:nth-child(2) .good_num{
        width: 100%;
        position: absolute;
        bottom: 70px;
        left: 10%;
        width: 80%;
    }
    .box section:nth-child(2) .good_num span{
        float: left;
    }
    .box section:nth-child(2) .good_num div{
        display: flex;
        float: right;
    }
    .box section:nth-child(2) .good_num div span{
        height: 20px;
        margin: 3px;
        width: 20px;
        background: #f7f7f7;
        color: #ff464e;
        display: block;
        text-align: center;
        line-height: 20px;
    }
    .box section:nth-child(2) .good_num div span:nth-child(2){
        color: #333;
        background: #fff;
    }
    .box section:nth-child(3){
        width: 100%;
        height: 50px;
        background: #ff464e;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        position: absolute;
        bottom: 0;
    }
    .banner{
        height:375px;
    }
    .banner img{
        width:100%;
    }
    .banner img[lazy=loading] {
        background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518002511777&di=da368b0bdcafacb17e57d7aa454df26c&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D0fc534312c34349b74536681fcda39f8%2Ff9198618367adab46005ce688fd4b31c8601e4c0.jpg) no-repeat ;
        background-position: 50% 50%; 
        background-size: 100px 80px;
        margin: auto 0;
    }
    .de_footer{
        width: 100%;
        height: 45px;
        border-top: 1px solid #e1e1e1;
        background: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .de_footer a{
        float: left;
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 45px;
        box-sizing: border-box;
        position: relative;
    }
    .de_footer b{
        float: left;
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 45px;
        box-sizing: border-box;
        position: relative;
        
    }
    .de_footer .p_d_cart{
        float: left;
        font-size: 12px;
        text-align: center;
        line-height: 45px;
        box-sizing: border-box;
        position: relative;
        width: 20%;
        height: 45px;
        width: 20%;
        height: 45px;
        border-right: 1px solid #e7e7e7;
        border-left: 1px solid #e7e7e7;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .de_footer b{
        width: 25%;
        height: 45px;
    }
    .de_footer .jiaru{
        width: 35%;
        height: 45px;
        background: #ff464e;
        color: #fff;
    }
    .de_footer .cart_num{
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: #ff464e;
        color: #fff;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        position: absolute;
        top: 3px;
        right: 18px;
    }
    .de_footer b img{
        width: 20px;
        height: 20px;
    }
    .de_footer b i{
        line-height: 12px;
    }
    .de_footer a img{
        width: 20px;
        height: 20px;
    }
    .de_footer a i{
        line-height: 12px;
    }
    .de_footer a{
        width: 20%;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #tw{
		width:100%;
		height:200px;
	}
    #tw .i_t_pro img{
		width:100%;
	}
    .i_t_pro{
        width:100%;
    }
    .huiyuan{
        width:94%;
        margin: 0 3%;
        margin-top:10px;
        background: #fff;
        overflow: hidden;
    }
    .huiyuan h3{
        float: left;
    }
    .huiyuan h3 .price{
        font-size: 18px;
        font-weight:  600;
        color: #ff464e;
    }
    .huiyuan h3 .ber_price{
        font-size: 12px;
        color: #bbbbbb;
    }
    .huiyuan .yigou{
        float: right;
        font-size: 12px;
        color: #999;
    }
    .biaoti{
        width:94%;
        margin: 0 3%;
        overflow: hidden;
        position: relative;
        background: #fff;
    }
    .biaoti .p_name{
        font-size: 16px;
        color: #333;
        padding: 10px 0;
        float: left;
        width: 80%;
        line-height: 17px;
    }
    .biaoti .icon-wdeshouchangweixuanzhong{
        font-size: 16px;
        position: absolute;
        right: 0;
        top: 10px;
    }
    .xunhuan{
        width:94%;
        margin: 0 3%;
        overflow: hidden;
    }
    .xunhuan li{
        padding: 10px 0;
    }
    .xunhuan ul .ber .name{
        font-size: 12px;
        background: #ff464e;
        color: #fff;
        line-height: 14px;
    }
    .xunhuan ul .ber .youhui{
        font-size: 12px;
        color: #333;
        line-height: 14px;
    }
    .xunhuan ul .ber .youhui i{
        font-size: 12px;
        color: #ff464e;
        line-height: 14px;
    }
    .xunhuan ul .ber .icon-dayuhao{
        font-size: 20px;
        color: #999;
        float: right;
    }
    .xunhuan ul .zhuanshu span{
        font-size: 12px;
        color: #666;
        line-height: 14px;
        padding: 0 5px;
        position: relative;
    }
    .xunhuan ul .zhuanshu span:nth-child(1){
        margin-left: 5px;
    }
    .hy_zs:before{
        content: '';
        height: 4px;
        width: 4px;
        background: #ff464e;
        border-radius: 50%;
        position: absolute;
        top: 40%;
        left: -3px;
    }
    .xunhuan ul li .icon-more1{
        float: right;
        font-size: 20px;
        color: #999;
    }
    .zhekou{
        width:100%;
        height:40px;
    }
    .zhekou ul{
        width:100%;
        height:40px;
    }
    .yanse{
        width:94%;
        margin: 0 3%;
        overflow: hidden;
        padding: 10px 0;
    }
    .yanse ul{
        width:100%;
    }
    .yanse ul li{
        float:left;
        font-size:14px;
        color:gray;
        line-height: 16px;
    }
    .yanse ul li:nth-child(2) {       
        margin: 0 5px;
    }
    .yanse ul li:nth-child(4) {       
        float: right;
    }
    .yanse ul li:nth-child(4) a{
        font-size: 20px;
        color: #999;
        line-height: 16px
    }
    .dianpu{
        width:94%;
        box-sizing: border-box;
        overflow: hidden;
        margin: 10px 3%;
    }
    .dianpu h3{
        width: 40px;
        height: 40px;
        border: 1px solid #e7e7e7;
        float: left;
    }
    .dianpu h3 img{
        width: 100%;
    }
    .dianpu h4{
        display: flex;
        flex-direction: column;
        justify-content: center;
        float: left;
        margin-left: 10px;
    }
    .dianpu h4 span{
        font-size: 14px;
        color: #333;
    }
    .dianpu h4 i{
        font-size: 12px;
        color: #999;
    }
    .dianpu a{
        display: block;
        height: 40px;
        border: 1px solid #e7e7e7;
        float: right;
        margin-right: 5px;
    }
    .dianpu a {
        font-size: 12px;
        color: #333;
        line-height: 34px;
        height: 34px;
        padding: 0 5px;
    }
    .dianpu a i{
        font-size: 14px;
        color: #333;
    }
    .kong{
        width:100%;
        height:5px;
        background:#eee;
    }
    .img{
        width:100%;
        height:120px;
    }
    .img img{
        width:25%;
        height:100px;
    }
    .chakan{
        width:100%;
        height:40px;
        margin-bottom:5px;
        text-align:center;
        font-size:18px;
    }
    .prohibit{
        pointer-events: none;
        color: #ccc!important;
    }
</style>