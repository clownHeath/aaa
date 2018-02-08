<template>
    <div class="box">
        <div class="header_box">
            <div class="nodenglu" >
                <ul class="header-top">
                        <li class="header-left">
                            <a href="javascript:history.go(-1);" class="iconfont icon-jiantou"></a>
                        </li>
                        <li class="header-center">个人中心</li>
                </ul>
                <ul class="header-bottom">
                        <li class="header-left">
                            <router-link to="/Login" >登录</router-link>
                        </li>
                        <li class="header-center">|</li>
                        <li class="header-right">
                            <router-link to="/Register" >注册</router-link>
                        </li>
                </ul>
            </div>
            <div class="denglu"   v-show="isLogin">
                <ul class="header-top">
                        <li class="header-left">
                            <a href="javascript:history.go(-1);" class="iconfont icon-jiantou"></a>
                        </li>
                        <li class="header-center">个人中心</li>
                        <li class="denglu_r">
                            <a href="javascript:;" @click="removeLoca()">退出</a>
                        </li>
                </ul>
                <section class="personal" >
                    <a href="#" class="personalHead"></a>
                    <h5>
                        <span class="personalName">jp_{{this.name}}</span>
                        <a href="#" class="personalGeren">我的账户></a>
                    </h5>
                </section>
                <div class="vip">
                    <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/super_vip/card.png?8d873d8f-1&sv=449ce9ee" alt="">
                </div>
            </div>
        </div>

        <div class="content">
            <div class="order">
                <ul>
                    <li class="content-order-top">我的订单</li>
                    <li class="content-order">全部订单</li>
                </ul>
            </div>
            <div class="content-fukuan">
                <ul>
                <li v-for="(ele,index) in icon" :key="index">
                    <router-link :to="ele.path">
                        <i class="iconfont" :class="ele.icon" ></i>
                        <p>{{ele.name}}</p>
                    </router-link>  
                    </li>       
                 </ul>
            </div>
           <div class="shoucang">
                <ul>
                    <li v-for="(ele,index) in shoucang" :key="index">
                    <router-link :to="ele.path">
                        <span>{{ele.biaoti}}</span>
                        <span class="xiangqing">{{ele.xiangqing}}</span>
                    </router-link>  
                    </li>
                </ul>
            </div>
            <div class="kefu">
                <ul>
                    <li v-for="(ele,index) in kefu" :key="index">
                    <router-link :to="ele.path">
                        <span>{{ele.kefu}}</span>
                    </router-link>  
                    </li>
                </ul>
            </div>

            <div class="diannao">
                <ul>
                    <li v-for="(ele,index) in diannao" :key="index">
                    <router-link :to="ele.path">
                        <span>{{ele.diannao}}</span>
                    </router-link>  
                    </li>
                </ul>
            </div>
        </div>
        <l-footer></l-footer>
    </div>  
</template>

<script>
export default{
    data(){
        return{
            isLogin: false,
            name:"",
            icon:[
                {
                    "icon":"icon-daishouhuo",
                    "name":"待付款",
                    "path":"/home"
                },
                 {
                    "icon":"icon-daichengtuan",
                    "name":"待成团",
                    "path":"/home"
                },
                 {
                    "icon":"icon-icon",
                    "name":"待收货",
                    "path":"/home"
                },
                 {
                    "icon":"icon-tuikuanshouhou",
                    "name":"退款售后",
                    "path":"/home"
                }
            ],
            shoucang:[
                {
                    "biaoti":"我的优惠卷",
                    "xiangqing":"",
                    "path":"/home"
                },
                 {
                    "biaoti":"我的搜藏",
                    "xiangqing":"",
                    "path":"/home"
                },
                 {
                    "biaoti":"我的拼团",
                    "xiangqing":"",
                    "path":"/home"
                },
                 {
                    "biaoti":"至尊会员卡",
                    "xiangqing":"办理即享九折",
                    "path":"/home"
                },
                 {
                    "biaoti":"我的免单券",
                    "xiangqing":"0张",
                    "path":"/home"
                },
                 {
                    "biaoti":"借钱",
                    "xiangqing":"新用户免费领100元",
                    "path":"/home"
                }
            ],
            kefu:[
                {
                    "kefu":"客服中心",
                    "path":"/home"
                },
                 {
                    "kefu":"关于卷皮",
                    "path":"/home"
                }
                 
            ],
             diannao:[
                {
                    "diannao":"返回首页",
                    "path":"/home"
                },
                 {
                    "diannao":"客户端",
                    "path":"/home"
                },
                {
                    "diannao":"电脑版",
                    "path":"/home"
                }
            
                 
            ]
        }
    },
    methods: {
        removeLoca(){
            localStorage.clear()
            location.reload() //刷新当前页面
        }
    },
    mounted () {
        // console.log(JSON.parse(localStorage.userinfo).uid)
        if(JSON.parse(localStorage.userinfo).uid){
            this.isLogin = true
            this.name = JSON.parse(localStorage.userinfo).name
            console.log(this.isLogin)
        }else{
            this.isLogin = false
            console.log(this.isLogin)
        }
    }
}

</script>

<style scoped>
html,body{overflow-x:hidden}
.box{
    width:100%;
    height:auto;
}
.isActive{
    display: block;
    z-index: 999999;
}
.isActive2{
    display: none;
}
.header_box{
    width:100%;
    height:174px;
    overflow: hidden;
    position: relative;
}
.header-bottom li a{
    color:#fff;
}
.icon-jiantou{font-size: 16px; color: #fff;}
.header_box .header-top{width:100%;height:45px;}
.header_box .nodenglu{
    width:100%;
    height:174px;
    background:url("https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png");
    position: absolute;
    top: 0;
    left: 0;
}
.header_box .denglu{
    width:100%;
    height:174px;
    background:url("https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png");
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
.header_box .denglu .header-top{
    width:100%;height:45px;
}
.header_box .denglu .header-top .denglu_r{
    float: right;
    color: #fff;
    font-size: 16px;
    line-height: 45px;
    margin-right: 10px;
}
.header_box .denglu .header-top .denglu_r a{
    color: #fff;
}
.header_box .denglu .vip{
    width: 136px;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    right: -20px;
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
}
.header_box .denglu .vip img{
    width: 100%;
}
.header_box .header-top li{line-height:45px;float:left; color:#fff;font-size:20px;}
.header-top .header-left{text-indent:15px;}
.header-top .header-center{margin-left:127px;}
.header-bottom{width:100%;padding-left:125px;margin-top:40px;overflow: hidden;position: relative;}
.header_box .header-bottom li{line-height:50px;float:left; color:#fff;font-size:20px;}
.header_box .denglu section{
    width: 100%;
    margin-top: 40px;
    overflow: hidden;
}

.personal .personalHead{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    float: left;
    background: url(https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg) no-repeat;
    background-size: 100%;  
    margin: 0 10px;
} 
.personal h5{
    height: 50px;
    width: auto;
    float: left;
    display: flex;
    position: relative;
}
.personal h5 .personalName{
    font-size: 14px;
    color: #fff;
    line-height: 18px;
    height: 18px;
    margin-top: 4px;
}
.personal h5 a{
    position: absolute;
    top: 26px;
    font-size: 12px;
    color: #fff;
    line-height: 16px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.5);
    padding: 0 5px;
}
.header-bottom .header-center{margin:0 30px 0 30px;}
.content{width:100%;height:auto;}
.order{width:100%;height:45px;border-bottom:1px solid #ccc;}
.order ul{width:100%;height:40px; }
.order ul li{float:left;height:40px;line-height:40px;}

.content-order{margin-left:224px;color:#ccc;}
.content-order-top{text-indent:15px;}
.content-fukuan{width:100%;border-bottom:1px solid #ccc;display:flex;flex-direction:row;}
.content-fukuan ul{
    width:100%;
    height:75px;   
}
 .content-fukuan ul li{
     width:25%;
     float:left;
     text-align:center;
     margin-top:20px;  
 }
.shoucang{width:100%;height:auto;}
.shoucang ul{width:100%;height:auto;}
.shoucang ul li{width:100%;height:50px;border-bottom:1px solid #ccc;
line-height:50px;text-indent:20px;}
.shoucang ul .xiangqing{float:right;margin-right:20px}
.kefu{width:100%;height:100px;} 
.kefu ul{width:100%;height:auto;}
.kefu ul li{width:100%;height:50px;border-bottom:1px solid #ccc;
text-indent:20px;line-height:50px;}
.diannao{width:100%;height:40px;margin-bottom:60px;}
.diannao ul{width:100%;height:40px;}
.diannao ul li{width:33.3%;height:40px;line-height:40px;float:left;text-align:center;border-bottom:1px solid #ccc;}
</style>