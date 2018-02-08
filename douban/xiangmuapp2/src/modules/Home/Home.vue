
<template>
<div class="box">
    <l-header> </l-header>
    <l-content>
    <div class="content">
         <div class="banner">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="ele in banner">
                   <img class="pic" :src="ele.src" alt="">
              </mt-swipe-item>
            </mt-swipe>
         </div>
        <div class="content-two">
            <a href="#" v-for="(ele,index) in listImg4" :key="index"><img :src="ele.src" /></a>           
        </div>
        <div class="content-three">
            <a class="sc-gPEVay jZmIRd" href="#">
                <img src="https://s2.juancdn.com/jas/180120/8/b/5a6312e3a9fcf876c1102eed_1080x305.gif" />
            </a>
        </div>
        <div class="content-five">
            <div class="content-five-top">
                <a href="#"><img :src="ele.src" v-for="(ele,index) in listImg1"/></a>
            </div>
            <div class="content-five-center">
                <a href="#"><img :src="ele.src" v-for="(ele,index) in listImg2"/></a>
            </div>
            <div class="content-five-bottom">
                <a href="#"><img :src="ele.src" v-for="(ele,index) in listImg3"/></a> 
            </div> 
        </div>
        <div class="content-classify">
            <a href="#"><img :src="ele.src" v-for="(ele,index) in listImg5"/></a> 
        </div>
        <div class="content-classifyimg">
            <a href="#"><img :src="ele.src" v-for="(ele,index) in listImg6"/></a> 
        </div>
        <div class="pinpai"> 
            <p><span>精品选牌</span>货好不贵的良心品牌</p>
        </div>
        <div class="jiadian">
            <a href="#"><img :src="ele.src" v-for="(ele,index) in listImg7"/></a> 
        </div>
        <div class="classNav">
            <div class="classBox">
                <a href="#" v-for="(ele, index) in this.classify" :key="index" class="imgBox">
                    <img :src="ele.cate_img" />
                </a>
            </div>
        </div>
        <div class="jingxuan">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">精选专场</mt-tab-item>
                <mt-tab-item id="2">精选单品</mt-tab-item>
            </mt-navbar>

                <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1" class="item">
                    <ul>
                        <li v-for="(ele,index) in classifyimg" :key="index">
                            <router-link  to="/Order">
                            <img :src="ele.img"/>
                            <p class="item-tit">{{ele.tit}}</p>
                            <h2>
                                <p>{{ele.introduce}}</p>
                                <i>上新</i>
                            </h2>
                            </router-link>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="2" class="item">
                 <ul>
                       <li v-for="(ele,index) in classifyimg1" :key="index">
                            <router-link  to="/Order">
                            <img :src="ele.img"/>
                            <img src="https://goods3.juancdn.com/jas/180119/5/0/5a6194fda9fcf86da9764f4e_90x90.png?iopcmd=convert&Q=88&dst=png"  class="posi_img"/>
                            <h3>
                                <span>{{ele.price}}</span>
                                <del>{{ele.el_price}}</del>
                            </h3>        
                            <h4>                               
                                <b>{{ele.member}}</b>
                                <p class="item-title">{{ele.tit}}</p>
                            </h4>
                            </router-link>  
                       </li>
                </ul>
                </mt-tab-container-item>
            </mt-tab-container>
            <mt-tab-container v-model="selected">
                
            </mt-tab-container>
        </div>
    </div>
    </l-content>
    <l-footer></l-footer>
</div>
    
</template>
<script>
import axios from 'axios'
import { mapGetters,mapActions } from 'vuex'
export default{
    name: 'home',
    data () {
        return {
            listImg1:[
                {
                    src:"../../../static/img/1.png"
                },
                {
                    src:"../../../static/img/2.png"
                }
               
            ],
            listImg2:[
                {
                    src:"../../../static/img/3.png"
                },
                {
                    src:"../../../static/img/4.png"
                },
                {
                    src:"../../../static/img/5.png"
                }
               
            ],
             listImg3:[
                {
                    src:"../../../static/img/6.png"
                },
                {
                    src:"../../../static/img/7.png"
                },
                {
                    src:"../../../static/img/8.png"
                },
                {
                    src:"../../../static/img/9.png"
                },
                {
                    src:"../../../static/img/10.png"
                },
                {
                    src:"../../../static/img/11.png"
                },
                {
                    src:"../../../static/img/12.png"
                },
                {
                    src:"../../../static/img/13.png"
                }
               
            ],
             banner:[
                {
                    src:"../../../static/img/14.png"
                },
                {
                    src:"../../../static/img/15.jpg"
                },
                {
                    src:"../../../static/img/16.png"
                },
                {
                    src:"../../../static/img/17.png"
                },
                {
                    src:"../../../static/img/18.png"
                },
                {
                    src:"../../../static/img/19.png"
                },
                {
                    src:"../../../static/img/20.png"
                }  
            ],
             listImg4:[
                {
                    src:"../../../static/img/21.png"
                },
                {
                    src:"../../../static/img/22.png"
                },
                {
                    src:"../../../static/img/23.png"
                },
                {
                    src:"../../../static/img/24.gif"
                },
                {
                    src:"../../../static/img/25.png"
                },
                {
                    src:"../../../static/img/26.png"
                },
                {
                    src:"../../../static/img/27.png"
                },
                {
                    src:"../../../static/img/28.png"
                }  
            ],
            listImg5:[
                {
                    src:"../../../static/img/29.png"
                },
                {
                    src:"../../../static/img/30.png"
                }   
            ],
            listImg6:[
                {
                    src:"../../../static/img/31.png"
                },
                {
                    src:"../../../static/img/32.png"
                },
                {
                    src:"../../../static/img/33.png"
                },
                {
                    src:"../../../static/img/34.png"
                }    
            ],
            listImg7:[
                {
                    src:"../../../static/img/35.png"
                },
                {
                    src:"../../../static/img/36.jpg"
                },
                {
                    src:"../../../static/img/37.png"
                },
                {
                    src:"../../../static/img/38.jpg"
                },
                {
                    src:"../../../static/img/39.png"
                },
                {
                    src:"../../../static/img/40.png"
                },
                {
                    src:"../../../static/img/41.png"
                },
                {
                    src:"../../../static/img/42.png"
                }     
            ],
            selected:"1"

        }
    },
    computed:{
      ...mapGetters("home",[
        "classify","classifyimg","classifyimg1"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions("home",[
        "getClassify","getClassifyimg","getClassifyimg1"
      ])
    },
    mounted(){
      //发起 获取服务器数据的 action
     // this.$store.dispatch("getCityData")
      this.getClassify(),
      this.getClassifyimg(),
      this.getClassifyimg1()

    }
  }
    


</script>

<style>
html,body{overflow-x:hidden}
.pic{width:100%;height:200px;}
.banner{width:100%;height:200px;}
.content-one{width:100%;height:200px;border:1px solid #ccc;}
.content-two{width:100%;}
.content-two a{width:25%;height:100px;}
.content-two a img{width:25%;}
.content-three{
    /* // width:100%; */
    overflow: hidden;
}
.content-three a{
    overflow: hidden;
}
.content-three a img{
    width: 100%;
}
.content-five{width:100%;height:auto;border:1px solid #ccc;}
.content-five-top{width:100%;height:auto;}
.content-five-top a{width:50%;height:auto;}
.content-five-top a img{width:50%;height:auto;}
.content-five-center{width:100%;height:auto}
.content-five-center a{width:33%;height:auto;}
.content-five-center a img{width:33.2%;height:auto;}
.content-five-bottom{width:100%;height:auto}
.content-five-bottom a{width:25%;height:auto;}
.content-five-bottom a img{width:25%;height:auto;}
.content-classify{width:100%;height:108px;margin-top:6px;}
.content-classify a{width:49%;height:108px;margin:3px;}
.content-classify a img{width:49%;height:auto;}
.content-classifyimg{width:100%;height:118px; overflow:hidden;}
.content-classifyimg a{width:25%;height:auto;}
.content-classifyimg a img{width:25%;height:auto;} 
.pinpai{width:100%;height:40px;}
.pinpai p{text-indent:10px;line-height:40px;font-size:14px;color:#ccc;}
.pinpai p span{margin-right:20px; font-size:16px;color:black;font-weight:600;}
.jiadian{width:100%;height:200px;}
.jiadian a{width:25%;height:100px;}
.jiadian a img {width:25%;height:100px;}

.classNav{
        box-sizing: border-box;
        padding: 0.5% 1%;
        background: #fff;
    }
    .classBox{
        overflow: hidden;
    }
    .imgBox{
        width: 25%;
        float: left;
        display: block;
        overflow: hidden;
    }
    .imgBox img{
        width: 100%;
    }
.jingxuan{
    width:100%;
    height:300px;
}
.item{width:100%;height:auto;}
.item ul{width:100%;height:auto; overflow: auto;padding-top: 5px;}
.item ul li{width:48%; float:left; margin: 0 1% 5px; position: relative;}
.item ul li a{width:48%; float:left; margin: 0 1%; position: relative; width: 100%;} 
.item ul li img{width:100%;height:200px;margin: 5px 0;}
.item ul li .item-tit{color:red;font-size:14px;}
.item ul li .item-price{display:block; overflow:hidden; text-overflow:ellipsis; font-size: 12px;}
.item ul li h2{
    width: 100%;
    overflow: hidden;
}
.item ul li h2 p{
    width:80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color:#666;
    float: left;
}
.item ul li h2 i{
    float: right;
    font-size: 12px;
    color:#ccc;
    margin-right:2px;
}
.item ul li h3{
    font-size: 12px;
    color:#ccc;
}
.item ul li h3 span{
    font-size: 14px;
    color: red;
}
.item ul li .item-title{
    font-size: 12px;
    color: #666;
    line-height: 14px;
    width: 98%;
    margin: 2px 1%；
}
.item ul li .posi_img{
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
}
.item ul li h4 b{
    font-size: 12px;
    color: #ffe8ab;
    background: #2f3345;
}
.item ul li h4 p{
    margin-top: 3px;
}
</style>