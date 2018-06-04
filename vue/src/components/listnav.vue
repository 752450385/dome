<!--路由-->
<template>
    <div class="list">
        <router-link class="rout" to="/" exact active-class="active">首页</router-link>
        <router-link class="rout" to="/news">要闻</router-link>
        <router-link class="rout" to="/product">产品</router-link>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped>
  .list{
    width:80%;
    background: #f1f1f1;
    margin:0 auto;
    overflow: hidden;
    height:40px;
  }
  .rout{
    text-decoration: none;
    color: #12191f;
    float: left;
    margin-left:20px;
    line-height:40px;
  }
  .active{
    color: #ff7b4e;
  }
</style>
