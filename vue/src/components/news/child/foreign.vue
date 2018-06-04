<!--$axios.get  router传递参数-->
<template>
  <div>
    <ul>
      <li v-for="(value,index) in listData">
        <router-link :to="{path:value.src,query:{name:value}}">{{value.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        listData:null
      }
    },
    created:function(){
      this.$axios.get("http://localhost:8080/static/test.json").then((res)=>{
        this.listData=res.data.data;
      }).catch((error) =>{
          console.log(error);
        });
    }
  }
</script>
<style scoped="">
  li{
    text-align: left;
  }
  a{
    text-decoration: none;
    color: #4d4d4d;
  }
  a:hover{
    color: #ffa168;
  }
</style>
