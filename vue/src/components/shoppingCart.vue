<!--购物车-->
<template>
    <div>
      <table>
        <tr>
          <td>ID</td>
          <td>价格</td>
          <td>数量</td>
          <td>总价</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,index) in goods">
          <td>{{item.id}}</td>
          <td>{{item.price}}</td>
          <td>{{item.index}}</td>
          <td>{{item.price*item.index}}</td>
          <td @click="deleCp(index)">删除</td>
        </tr>
        <tr class="prices">
          总价:&nbsp&nbsp{{prices}}
        </tr>
      </table>
      <button @click="payment">去付款</button>
      <router-link to="/">回首页</router-link>
      <div class="slide">

      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        },
        computed:{
          goods(){
            return this.$store.state.cps;
        },
          prices(){
            var prices=0;
            var cps=this.goods;
            for(var i=0;i<cps.length;i++){
              prices+=(cps[i].price*cps[i].index);
            }
            return prices;
          }
      },
      methods:{
        deleCp(index){
          this.goods.splice(index, 1);
        },
        payment(){
            alert("付款成功")
        }
      }
    }
</script>
<style scoped="">
  td{
    margin-right:20px;
    display: inline-block;
    text-align: center;
    width:40px;
  }
  .prices{
    text-align: left;
  }
</style>
