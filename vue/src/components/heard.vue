<!--
<template>
    <div>
      <div class="top">
        <ul>
          <li>请登录</li>
          <li>购物车</li>
          <li>消息</li>
        </ul>
      </div>
      <List></List>
    </div>
</template>
<script type="text/ecmascript-6">
  import List from "./listnav.vue"
    export default {
        data() {
            return {}
        },
      components:{
        List
      }
    }
</script>
<style scoped>
.top{
  background: #f1f1f1;
  width:100%;
  height:40px;
}
</style>
-->
<template>
  <div>
    <div class="box">
      <ul>
        <li><a href="javascript:">登陆</a></li>
       <li><router-link to="/shpC">购物车</router-link></li>
        <li><a href="javascript:">消息</a></li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped="">
  div{
    width:100%;
    height:40px;
  }
  div .box{
    width:80%;
    background: #f1f1f1;
    margin:0 auto;
    border-bottom:1px #e1e1e1 solid;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
    overflow: hidden;
    text-align: right;
  }
  ul li{
    height:40px;
    line-height:40px;
    margin-right:5px;
    display:inline-block;
  }
  ul li a{
    text-decoration: none;
    color:#888888;
  }
</style>
