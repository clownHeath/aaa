<template>
  <div class="footer">
      <ul>
          <li v-for="(ele, index) in list" :key="index"  >
            <router-link :to="ele.sss" >
              <span :class="ele.icon"></span>
              <i class="active">{{ele.size}}</i> 
            </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
    export default {
        name: "app-footer",
        data () {
            return {
                num: 0,
               list:[
                    {
                        "icon": "iconfont icon-shouye01",
                        "size": "首页",
                        "sss": "/"
                    },
                    {
                        "icon": "iconfont icon-huiyuan",
                        "size": "会员超市",
                        "sss": "/Supermarket"
                    },
                    {
                        "icon": "iconfont icon-leimupinleifenleileibie",
                        "size": "分类",
                        "sss": "/Class"
                    },
                    {
                        "icon": "iconfont icon-gouwuche",
                        "size": "购物车",
                        "sss": "/Cart"
                    },
                    {
                        "icon": "iconfont icon-jinakangbaoicons25",
                        "size": "我的卷皮",
                        "sss": "/User"
                    }
                ]
            }
        },
        methods:{
            toggle(index){
                this.num = index
            }
        }
    }
</script>
<style scoped>
    .router-link-exact-active {color: red;}
    .footer{
        height: 50px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: 1px solid #ebebeb;
    }
    ul{
        width: 100%;
        height: 50px;
        display: flex;
    }
    li{
        width:20%;
    }
    li a{
        height: 50px;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    span{
        height: 25px;
        width: 25px;
        line-height: 25px;
        text-align: center;
    }
    i{
        font-size: 12px;
    }
   
</style>


