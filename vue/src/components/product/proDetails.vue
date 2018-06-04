<template>
    <div>
      <Heard></Heard>
      <Logo></Logo>
      {{$store.state.show}}
      <a href="javascript:;" @click="$store.commit('switch_dialog',false)">点击</a>
      <Foot></Foot>
    </div>
</template>
<script type="text/ecmascript-6">
  import Heard from '../heard'
  import Logo from '../logo'
  import Foot from '../foot.vue'
    export default {
        data() {
            return {
              dd:[]
            }
        },
      components:{
        Heard,Logo,Foot
      },
     mounted() {
      //获取路由传递过来的参数
      this.dd=this.$route.query.name;
    }
    }
</script>
<style scoped>

</style>
