<template>
    <div>
        <div class="header-top">
            <a href="javascript:history.go(-1);" class="iconfont icon-jiantou" ></a>
            <div class="header-center">订单确认</div>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .header-top {
        height: 45px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #dedede;
    }
    .header-top .icon-jiantou{
        color:#000;
        line-height: 45px;
        z-index: 999999999;
        font-size:22px;
        height: 45px;
        position: absolute;
        left: 10px;
    }
    .header-top .header-center{
        color:#000;
        font-size:20px;
        width: 100%;
        position: absolute;
        line-height: 45px;
        text-align: center;
        height: 45px;
        top: 0;
        left: 0;
    }
</style>
