<template>
    <div id="liBox">
        <div class="li_head">
            <a href="javascript:history.go(-1);" class="iconfont icon-jiantou"></a>
            <span>{{this.name}}</span>
            <h4>
                <a href="#" class="iconfont icon-weibiaoti10"></a>
                <a href="#" class="iconfont icon-gengduo"></a>
            </h4>
        </div>

        <l-content>
            <ul>
                <li v-for="(ele, index) in listdata" :key="index" >
                    <router-link :to="{name:'Details', params:{pid: ele.list_id }}">
                        <img v-lazy="ele.list_img" alt="">
                        <h3>
                            <span>{{ele.price}}</span>
                            <del>{{ele.original_price}}</del>
                        </h3>
                        <h4>
                            <b>{{ele.ber_price}}</b>
                            <p class="item-title">{{ele.list_name}}</p>
                        </h4>
                    </router-link>
                </li>
            </ul>
        </l-content>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mapGetters, mapActions } from 'vuex'
    export default{
        name: 'list',
        data () {
            return {
                name: ""
            }
        },
        computed:{
            ...mapGetters("list",[
                "listdata"
            ])
        },
        methods: {
            ...mapActions("list",[
                "getListData"
            ])
        },
        mounted () {
            // console.log(this.$route.params)
            var id = this.$route.params.list_id;
            this.name = this.$route.params.list_name;
            this.getListData(this.$route.params)
        }
    }
</script>
<style scoped>
    img[lazy=loading] {
        background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518002511777&di=da368b0bdcafacb17e57d7aa454df26c&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D0fc534312c34349b74536681fcda39f8%2Ff9198618367adab46005ce688fd4b31c8601e4c0.jpg) no-repeat;
        background-position: 50% 50%; 
        background-size: 100px 80px;
        margin:0 auto ;
    }
    .li_head{
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #ebebeb;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .li_head a{
       padding: 0 10px;
       z-index: 99999999;
    }
    .li_head span{
        position: absolute;
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
    }

    .public_content{
        width: 100%;
    }



.public_content ul{width:100%;height:auto; overflow: auto;padding-top: 5px;}
.public_content ul li{width:48%; float:left; margin: 0 1% 5px; position: relative; height: 265px;}
.public_content ul li a{width:48%; float:left; margin: 0 1%; position: relative; width: 100%;} 
.public_content ul li img{width:100%;height:200px;margin: 5px 0;}
.public_content ul li .item-tit{color:red;font-size:14px;}
.public_content ul li .item-price{display:block; overflow:hidden; text-overflow:ellipsis; font-size: 12px;}
.public_content ul li h2{
    width: 100%;
    overflow: hidden;
}
.public_content ul li h2 p{
    width:80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color:#666;
    float: left;
}
.public_content ul li h2 i{
    float: right;
    font-size: 12px;
    color:#ccc;
    margin-right:2px;
}
.public_content ul li h3{
    font-size: 12px;
    color:#ccc;
}
.public_content ul li h3 span{
    font-size: 14px;
    color: red;
}
.public_content ul li .item-title{
    font-size: 12px;
    color: #666;
    line-height: 14px;
    width: 98%;
    margin: 2px 1%；
}
.public_content ul li h4 b{
    font-size: 12px;
    color: #ffe8ab;
    background: #2f3345;
}
.public_content ul li h4 p{
    margin-top: 3px;
}
</style>
