<!--接收router传递过来的参数-->
<template>
    <div>
      <h3>{{dd.title}}</h3>
      <div v-html="dd.center" class="cen"></div>
      <router-link to="/">返回首页</router-link>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              dd:{

              }
            }
        },
      mounted() {
        //获取路由传递过来的参数
          this.dd=this.$route.query.name;

      }
    }
</script>
<style scoped="">
  .cen{
    text-align: left;
  }
</style>
