<template>
    <div class="box">
      <img v-bind:src="imgUrl" alt="">
      <div class="search_div">
        <input type="text" class="search">
        <button class="search_btn">搜索</button>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import List from './listnav'
    export default {
        data() {
            return {
              imgUrl:'./static/img/timg.jpg'
            }
        },
      components:{
        List
      }
    }
</script>
<style scoped>
  .box{
    width:80%;
    margin:0 auto;
    overflow: hidden;
    background: #f1f1f1;
  }
  .box .search_div{
    width:87%;
    height:37px;
    margin-top:20px;
    overflow: hidden;
    border:1px red solid;
  }
  .box img{
    width:12%;
    height:80px;
    display: inline-block;
    float: left;
  }
  .box .search_div .search{
    width:82%;
    height:35px;
    float: left;
    font-size:20px;
    line-height:35px;
    outline:none;
    border:none;
    border-right:1px red solid;
    box-sizing: border-box;
  }
  .box  .search_div .search_btn{
    width:18%;
    float: left;
    height:37px;
    line-height:37px;
    border:none;
    outline:none;
  }
</style>
