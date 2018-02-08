<template>
    <div class="box">
        <l-header></l-header>
        <l-content>
            <div class="content-left">
                 <p v-for="(ele,index) in kind" :key="index" @click="change(index)" class="c_active" :class="{active:index==ind}">{{ele.list_name}}</p> 
            </div>

            <div class="content-right">
                <ul>
                    <li v-for="(ele,index) in kind[ind]" :key="index">   
                        <section  v-for="(item,index) in ele" :key="index">
                            <router-link :to="{name:'List',params:{list_id:item.list_id, list_name:item.list_name}}">
                                <img :src="item.list_img" alt="">      
                                <span>{{item.list_name}}</span> 
                            </router-link>           
                        </section>                                          
                    </li>
                </ul>
                
            </div>    
        </l-content>
        <l-footer></l-footer>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters,mapActions } from 'vuex'

export default{
    name:'class',
    data(){
        return{
           num: 2,
           ind:0
        }

    },
    computed:{
      ...mapGetters("class2",[
        "kind"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions("class2",[
        "getKind"
       
      ]),
      change(index){
          this.ind = index
      }
    },
    mounted(){
      //发起 获取服务器数据的 action
     // this.$store.dispatch("getCityData")
      this.getKind()
      
  } 
}   
</script>
<style scoped>
.box{width:100%;height:100%;}
.content-left{width:20%; float:left; background: #f9f9f9;}
.c_active{text-align: center;height:50px;line-height:50px; font-size: 12px; line-height: 50px;
    border-bottom: 1px solid #ebebeb;
    border-left: 4px solid #f9f9f9;
    }
.content-right{width:79%;float:left; overflow: hidden;}
.content-right ul{
    width: 100%;
    overflow: hidden;
}
.content-right ul li{
    width: 100%;
    overflow: hidden;
}
.content-right ul li a{
    width: 33%;
    display: flex;
     float: left;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.content-right ul li a img{
    width: 80%;
}
.content-right ul li a span{
    font-size: 12px;
     color: #666;
}
.active{
    text-align: center;
    height:50px;
    line-height:50px;
    font-size: 12px; 
    line-height: 50px;
    border-bottom: 1px solid #ebebeb;
    color: red;
    background: #fff;
    border-left: 4px solid red;
}

</style>