<template>
    <div id="sup_wrap">
        <l-content>
            <div class="sup_t">
                <a href="#" class="img_head">
                    <img src="https://goods3.juancdn.com/jas/171227/4/a/5a433d1ea9fcf86a6253c396_1080x412.png?iopcmd=convert&Q=85&dst=png" alt="">
                </a>
                <a href="#" class="img_ber">
                    <img src="https://goods5.juancdn.com/jas/171227/8/3/5a433d4e8150a16ce25f1f8b_1080x138.png?iopcmd=convert&Q=85&dst=png" alt="">
                </a>
            </div>
            <div class="ber_goods_t">
                <a href="#" v-for="(ele, index) in goods" :key="index">
                    <img :src="ele.src" alt="">
                </a>
            </div>
            <div class="ber_goods_b">
                   <a href="#" class="bg_t" style="width: 50%;height: 120px;"></a>
                   <a href="#" class="bg_t" style="width: 50%;height: 120px;"></a>
                   <a href="#" class="bg_b"></a>
                   <a href="#" class="bg_b"></a>
                   <a href="#" class="bg_b"></a>
            </div>
            <div class="ber_banner">
                <a href="#">
                    <img src="https://s2.juancdn.com/jas/180122/b/d/5a65ce3b8150a17da73be104_1080x295.gif" alt="">
                </a>
            </div>
            <div class="ber_evaluate">
                <a href="#">
                    <img src="https://goods1.juancdn.com/jas/180102/0/2/5a4b560aa9fcf883723bb5c9_1080x115.png?iopcmd=convert&Q=85&dst=png" alt="">
                </a>
            </div>
            <div class="ber_list">
                <section class="ber_tab">
                    <span v-for="(ele, index) in suplist" :key="index" @click="toggle(index)" :class="{active:index==ind}">{{ele.food_name}}</span>
                </section>

                <section class="ber_tab_box">
                    <ul>
                        <li v-for="(ele, index) in suplist[ind].children" :key="index"  >
                            <router-link :to="{name:'Details', params:{pid: ele.food_id }}" >
                                <img v-lazy="ele.food_img" :title="ele.food_name" >
                                <h6>{{ele.food_name}}</h6>
                                <h5>
                                    <span>{{ele.price}}</span>
                                    <i>{{ele.der_price}}</i>
                                    <em>
                                        <img src="https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" alt="">
                                    </em>
                                </h5>
                                <b>非会员:{{ele.no_member}}</b>
                            </router-link>
                        </li>
                    </ul>
                </section>
            </div>
        </l-content>
        <l-footer></l-footer>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mapGetters,mapActions } from 'vuex'
    export default {
        name: "supermarket",
        data () {
            return {
                num: '1',
                ind: '0',       
                goods:[
                    {
                        src:"https://goods8.juancdn.com/jas/180120/e/c/5a62ba298150a1727106a9fa_270x418.png?imageMogr2/quality/85!/format/png"
                    },
                    {
                        src:"https://goods7.juancdn.com/jas/180120/d/8/5a62ba308150a172f95a6fe6_270x418.png?iopcmd=convert&Q=85&dst=png"
                    },
                    {
                        src:"https://goods8.juancdn.com/jas/180122/f/6/5a65b12da9fcf80dc174bee8_270x418.png?imageMogr2/quality/85!/format/png"
                    },
                    {
                        src:"https://goods5.juancdn.com/jas/180122/8/1/5a65e3c58150a17ba80a0b3d_270x418.png?iopcmd=convert&Q=85&dst=png"
                    }
                ]
            }
        },
        computed:{
            ...mapGetters("supermarket",[
                "suplist"
            ])
        },
        methods: {
            ...mapActions("supermarket",[
                "getSuplist"
            ]),
            toggle(index){
                this.ind = index
            }
        },
        mounted(){
            this.getSuplist()
        }

    }
</script>
<style scoped>
    img[lazy=loading] {
        background: url(../../image/timg.jpg) no-repeat;
        background-size: 100% ; 
        margin: auto 0;
    }
    #sup_wrap{
        background: #f4f4f8;
        height: auto;
    }
    .sup_t{
        width: 100%;

    }
    .sup_t a{
        width: 100%;
        display: block;       
    }
    .sup_t a img{
        width: 100%;
    }
    .ber_goods_t {
        width: 100%;
        overflow: hidden;
    }
    .ber_goods_t a {
        width: 25%;
        float: left;
    }
    .ber_goods_t a img{
        width:100%;
    }
    .ber_goods_b {
        width: 100%;
        overflow: hidden;
    }
    .ber_goods_b a{
        display: block;
        float: left;
        width: 33.33%;
        height: 140px;
    }
    .ber_goods_b a {
        background: url(https://goods5.juancdn.com/jas/180111/9/8/5a574ff2a9fcf8a94c38a342_540x324.png?iopcmd=convert&Q=85&dst=png) no-repeat;
        background-size: 100% 100%;
    }
    .ber_goods_b a:nth-child(2) {
        background: url(https://goods7.juancdn.com/jas/180120/c/a/5a629af5a9fcf8a1c1681abe_540x324.png?iopcmd=convert&Q=85&dst=png) no-repeat;
        background-size: 100% 100%;
    }
    .ber_goods_b a:nth-child(3) {
        background: url(https://goods1.juancdn.com/jas/180112/0/1/5a585456a9fcf863b2180a38_360x402.png?iopcmd=convert&Q=85&dst=png) no-repeat;
        background-size: 100% 100%; 
    }
    .ber_goods_b a:nth-child(4) {
        background: url(https://goods3.juancdn.com/jas/180123/5/1/5a671294a9fcf89b016be76b_360x402.png?iopcmd=convert&Q=85&dst=png) no-repeat;
        background-size: 100% 100%; 
    }
    .ber_goods_b a:nth-child(5) {
        background: url(https://goods2.juancdn.com/jas/180118/3/9/5a6034838150a16c494c1030_360x402.png?imageMogr2/quality/85!/format/png) no-repeat;
        background-size: 100% 100%; 
    }
    .ber_banner{
        width: 100%;
        overflow: hidden;
        margin: 10px 0;
    }
    .ber_banner a{
        width: 100%;
        display: block;
    }
    .ber_banner a img{
        width: 100%;
        display: block;
    }
    .ber_evaluate{
        width: 100%;
    }
    .ber_evaluate a{
        width: 100%;
        display: block;
    }
    .ber_evaluate a img{
        width: 100%;
        display: block;
    }
    .active {
        border-bottom: 3px solid red;
        color: red!important;
    }
    .active_show{
        display: block;
    }
    .ber_list{
        width: 100%;
    }
    .ber_list .ber_tab{
        width: 100%;
        height: 40px;
        background: #fff;
        display: flex;
        justify-content: space-around;
    }
    .ber_list .ber_tab span{
        font-size: 12px;
        color: #666;
        line-height: 40px;
        
    }
    .ber_tab_box{
        width: 100%;
        overflow: hidden;
    }
    .ber_tab_box ul{
        width: 100%;
        overflow: hidden;
    }
    .ber_tab_box ul li{
        width: 50%;
        box-sizing: border-box;
        float: left;
        background: #fff;
        border-top: 1px solid #e1e1e1;
    }
    .ber_tab_box ul li:nth-child(odd){
        border-right: 1px solid #e1e1e1;
    }
    .ber_tab_box ul li img{
        width: 100%;
        box-sizing: border-box;
        float: left;
    }
    .ber_tab_box ul li h6{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        color: #000;
        width: 96%;
        margin: 0 2%;
    }
    .ber_tab_box ul li h5{
        width: 100%;
        /* margin: 0 2%; */
        position: relative;
        /* transform:scale(0.8); */
    }
    .ber_tab_box ul li h5 em{
        width: 30px;
        height: 30px;
        display: block;
        background: #e08d3b;
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 10px;
        border-radius: 5px;
    }
    .ber_tab_box ul li h5 em img{
        width: 80%;
        margin: 10% 10%;
    }
    .ber_tab_box ul li h5 span{
        font-size: 14px;
        color: #e08d3b;
    }
    .ber_tab_box ul li h5 i{
        font-size: 50%;
        background: #000;
        color: #ffe38c;
    }
    .ber_tab_box ul li b{
        font-size: 12px;
        display: block;
        width: 96%;
        margin: 0 2%;
        color: #999;
        padding-bottom: 5px;
    }
</style>
