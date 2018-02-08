<template>
    <div class="box">
        <div class="box-height">
            <ul>
                <li><a href="javascript:history.go(-1);" class="iconfont icon-fanhui"></a></li>
                <li class="reg"><a href="#" >注册</a></li>
            </ul>
        </div>
        <p class="yanzheng">请确定你的手机畅通，注意接收验证码</p>
        <div class="text">
            <p><input type="username" id="user-mobile" name="username" v-model="username" placeholder="请输入手机号码"></p>
            <p>
                <input type="password" id="user-password" name="password" v-model="password" placeholder="请输入密码">
            </p>
        </div>
        <button id="reg-btn" @click="register()"><p>注册</p></button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import qs from 'qs'

    export default{
        name:'Reg',
        data(){
            return{
            username:"",
            password:""
            }     
        },
        methods:{
            register(){
                var username=this.username
                var password=this.password
                var name=Date.parse(new Date())
                var data={
                    username,
                    password,
                    name
                }
                if(data.username==""){
                    Toast("用户名不能为空")
                }else if(data.password==""){
                    Toast("密码不能为空")
                }else{
                    //注册  存进数据库
                    this.axios.post("http://localhost:8000/api/user/reg",qs.stringify(data)).then(data=>{
                        console.log(data)
                        if(data.data.msgCode=="0"){
                            console.log("用户名已注册")
                        }else if(data.data.msgCode=="1"){
                            console.log("注册成功")
                            this.$router.push("login")
                        }
                    })
                }
            }
        }  
    }

</script>
<style>
.box{
    width:100%;
    height:100%;
}
.box-height{
    width:100%;
    height:45px; 
    border-bottom:1px solid #ccc;
}
.box-height ul{
    width:100%;
    height:45px;
}
.box-height ul li{
    float:left;
    width:140px;
    height:45px;
    padding-left:20px;
    line-height:45px;
}
.yanzheng{
    text-align: center;
    width:100%;height:50px;
    line-height:50px;color:#ccc;
}
.text{
    width:100%;
    height:110px;
    overflow: hidden;
}
input{
    outline: none;
}
.text p:nth-child(2) .button{
    width:30%;
    display:inline-block;

}
.text input{
    width:90%;
    height:50px;
    border:none;
    border-bottom:1px solid #ccc;
    margin:0 20px 0 20px;
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
</style>
