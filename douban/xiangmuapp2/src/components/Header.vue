<template>
  <div class="header">
     <a>
       <p>
          <i class="iconfont icon-sousuo" ></i>  
          <img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt="" class="juanpi" />
          <span class="sousuo">百万优惠卷疯狂派送</span>
       </p>
        <span class="iconfont icon-dingdan" id="span"></span>
     </a>
  </div>
</template>
<script>
  export default {
    name: 'l-header',
    props: {
      tit: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
.header {
  width:100%; 
  background:#fff;
  z-index:999;
}
.header a{
  display: block;
  width:90%;
  height: 30px;
  margin: 7px 5%;
  background:#fff;
}
.header a p{
  width: 90%;
  background: #f2f2f2;
  border-radius: 3px;
  float: left;
  height: 30px;
}
.header a .icon-dingdan{
  width: 10%;
  float: right;
  background: #fff;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  text-align: right;
}
.header a p i{
  font-size: 17px;
  line-height: 30px;
  float: left;
  margin-left: 5px;
}
.header a p img{
  height: 17px;
  margin-top: 6px;
  margin: 6px 5px 0 5px;
  float: left;
}
.header a p span{
  font-size: 12px;
  color: rgb(153, 153, 153);
  float: left;
  height: 30px;
  line-height: 30px;
}
</style>