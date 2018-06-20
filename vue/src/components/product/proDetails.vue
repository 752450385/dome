<template>
    <div>
      <Heard></Heard>
      <Logo></Logo>
      <div class="center">
        <div class="left">
          <img :src=dd.src alt="">
        </div>
        <div class="right">
          <p>数量:&nbsp&nbsp&nbsp<span @click="jianIndex">-</span><span>{{cp.index}}</span><span @click="addIndex">+</span></p>
          <p>价格:&nbsp&nbsp&nbsp{{'￥'+dd.Price}}</p>
          <button @click="shoppingCart">加入购物车</button>
        </div>
      </div>
      {{$store.state.show}}
      <!--<a href="javascript:;" @click="$store.commit('switch_dialog',false)">点击</a>-->
      <!--<a href="javascript:;" @click="shoppingCart">点击</a>-->
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
              dd:{},
              index:1,
              cp:{
                index:1,
                price:0,
                id:0,
                src:"javasctipt:"
              }
            }
        },
      components:{
        Heard,Logo,Foot
      },
     mounted() {
      //获取路由传递过来的参数
      this.dd=this.$route.query.name;
//       console.log(this.dd)
    },
      methods:{
        addIndex(){
          this.cp.index++;
        },
        jianIndex(){
          if(this.cp.index>1){
            this.cp.index--;
          }
        },
        shoppingCart(){
          this.cp.id=this.dd.id;
          this.cp.src=this.dd.src;
          this.cp.price=this.dd.Price;
          this.$store.commit('switch_dialog',this.cp);
//          this.$router.go(-1);
          history.go(-1);
        }
      }
    }
</script>
<style scoped>
  .center{
    margin:0 auto;
    width: 80%;
    height:400px;
    position: relative;
    margin-top:20px;
  }
  .center .left{
    width:40%;
    height:100%;
    float: left;
    position: relative;
  }
  .center .left img{
    position: absolute;
    top:0px;
    left: 0px;
    width:100%;
    height:100%;
  }
  .center .right{
    width:60%;
    height:100%;
    float: left;
  }
  .center .right p{
    text-align: left;
    font-size:30px;
  }
  .center .right p span{
    display: inline-block;
    margin-right:10px;
    cursor: pointer;
  }
</style>
