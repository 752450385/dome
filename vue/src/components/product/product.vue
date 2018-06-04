<!--产品-->
<template>
    <div>
      <Heard></Heard>
      <Logo></Logo>
      <!--分页-->
      <div class="proCenTer">
        <proCenTer></proCenTer>
      </div>
      <Foot></Foot>
    </div>
</template>
<script type="text/ecmascript-6">
  import Heard from '../heard'
  import Logo from '../logo'
  import proCenTer from './center.vue'
  import Foot from '../foot.vue'
    export default {
        data() {
            return {

            }
        },
      components:{
        Heard,Logo,proCenTer,Foot
      }
    }
</script>
<style scoped>
  .proCenTer{
    width:80%;
    margin:10px auto;
    overflow: hidden;
  }
</style>
