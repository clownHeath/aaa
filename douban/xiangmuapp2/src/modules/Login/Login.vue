<template>
    <div class="box">
        <div class="lo_header">
            <ul>
                <li><a href="javascript:history.go(-1);" class="iconfont icon-fanhui"></a></li>
                <li><span href="#">登录</span></li>
                <li>
                    <router-link to="Register">注册</router-link>
                </li>
            </ul>
        </div>
        
        <div class="content-tab">
            <mt-navbar  v-model="selected">
                <mt-tab-item   id="1">卷皮账号登录</mt-tab-item>
                <mt-tab-item  id="2">手机快捷登录</mt-tab-item>
            </mt-navbar>
            
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <input type="username" name="username" v-model="username" placeholder="手机号/邮箱/用户名"><br/>
                    <input type="password" name="password" v-model="password" placeholder="密码">
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <input type="username" name="username" v-model="username"  placeholder="请输入手机号码"><br/>
                    <input type="password" name="password" v-model="password"  placeholder="请输入验证码">  
                </mt-tab-container-item>
            </mt-tab-container>

            <button @click="login()"><p>登录</p></button>

            <div class="mima">
                <ul>
                    <li>两周内免登陆</li>
                    <li>忘记密码？</li>
                </ul>
            </div>
            <p class="sanfang">第三方账号快速登录</p> 
            <div class="img">
                <img src="../../../static/img/43.png"/>
                <img src="../../../static/img/44.png"/>
                <img src="../../../static/img/45.png"/>
            </div>
            <div class="content-pic">
                <ul>
                    <li>全场包邮</li>
                    <li>100%人工质检</li>
                    <li>七天放心退</li>
                </ul>
            </div>           
        </div>
    </div> 
</template>

<script>
    import qs from 'qs'
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return{
                selected:'1',
                username:"",
                password:""
            }
        },
        methods:{
            login(){
                var username=this.username
                var password=this.password
                var userdata={
                    username,
                    password
                }
                if(userdata.username==""){
                    Toast("请输入用户名")
                }else if(userdata.password==""){
                    Toast("请输入密码")
                }else{
                    this.axios.post("http://localhost:8000/api/user/login",qs.stringify(userdata)).then(data=>{
                        if(data.data.msgCode=="1"){
                            localStorage.userinfo = JSON.stringify(data.data.userInfo)  
                            //存储到本地localStorage
                            this.$router.push("/")
                        }else{
                            if(data.data.msgCode=="2"){
                                Toast("密码错误")
                            }else{
                                Toast("用户名不存在")
                            }
                        }
                    })
                }
                
            }
        }
    }
</script>

<style scoped>
.box{
    width:100%;
    height:100%;
}
.lo_header{
    width:100%;
    height:45px;
    background:red;
}
.lo_header ul{
    width:100%;
    height:45px;
}
.lo_header ul li{
    width:33.3%;
    height:45px;
    line-height:45px;
    float:left;
    text-align:center;
    color:#fff;
}
.lo_header ul li a{
    color:#fff;
}
.content-tab{
    width:100%;
    height:500px;
    font-size: 24px;
}
.mint-navbar .mint-tab-item-label{
    font-size:30px;
}
input{
    width:100%;
    height:30px;
    border:none;
    border-bottom:1px solid #ccc;
    padding-top:10px;
    margin:10px 10px 0 10px;
    outline: none;
}
button{
    width:80%;
    height:40px;
    margin-left:40px;
    margin-top:30px;
    border:none;
}
button p{
    color:#fff;
}
.mima{
    width:100%;
    height:20px;
}
.mima ul{
    width:100%;
    height:20px;
    margin-top:10px;
}
.mima ul li{
    width:50%;
    height:20px;
    float:left;
    font-size:12px;
    text-align:center;
}
.sanfang{
    font-size:14px;
    text-align:center;
    margin-top:30px;
    color:#ccc;
}
.img{
    width:100%;
    height:150px;
}
.img img{
    width:50px;
    height:50px;
    margin:30px 0  0 50px;
}
.content-pic{
    width:100%;
    height:50px;
}
.content-pic ul{
    width:100%;
    height:50px;
}
.content-pic ul li{
    width:33.3%;
    height:50px;
    float:left;
    font-size:12px;
    text-align: center;
    color:#ccc;
}
</style>