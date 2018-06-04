<template>
    <div class="Box">
      <Heard></Heard>
      <Logo></Logo>
      <List></List>
      <div class="Broadcast">轮播</div>
      <div class="outline">
        <div class="outline_news">
          <div class="con_1">
            <p>公司要闻</p>
            <span>更多></span>
          </div>
          <div class="con_center">
            <div class="pice">
              <img :src="pice.imgUrl" alt="">
              <p class="xplain">{{pice.xplain}}</p>
            </div>
            <ul class="nes">
              <li v-for="item in nes">
                <p class="nes_title">{{item.title}}</p>
                <!--{path:'/news',query:{name:item.id}}  传递参数-->
                <p class="new_center">{{item.center}} <router-link :to="{path:'/news',query:{name:item.id}}"  class="xq">[详情]</router-link></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="outline_product">
          <div class="con_1">
            <p>产品</p>
            <span>更多></span>
          </div>
          <div class="pice">
            <img :src="product.imgUrl" alt="">
            <p class="xplain">{{product.xplain}}</p>
          </div>
        </div>
      </div>
      <Foot></Foot>
    </div>
</template>
<script type="text/ecmascript-6">
  import Heard from '../heard'
  import Logo from '../logo'
  import List from '../listnav'
  import Foot from '../foot.vue'
    export default {
        data() {
            return {
              pice:{
                imgUrl:"https://img.zcool.cn/community/011d505568957500000127165da479.jpg@1280w_1l_2o_100sh.webp",
                xplain:"网上找来的图片",
              },
              nes:[
                {
                  id:1,
                  title:'习近平：科技创新的思想障碍和制度藩篱',
                  center:'创新决胜未来，改革关乎国运。科技领域是最需要不断改革的领域'
                },
                {
                  id:2,
                  title:'迷信尚未根除，科普仍需努力',
                  center:'看到一个让人啼笑皆非的新闻：某位女士与丈夫了嫌隙，回婚姻。'
                }
              ],
              product:{
                imgUrl:"https://img.zcool.cn/community/011d505568957500000127165da479.jpg@1280w_1l_2o_100sh.webp",
                xplain:"网上找来的图片",
              }
            }
        },

      filters:{
        msg: function(msg) {
          /*
          v-html="$options.filters.highlight(option.title)".
          v-htm 使用过滤（filters）；
          * */
          return msg.center+'<router-link :to="{path:/test,,query: {name: msg.id}}">[详情]</router-link>';
        }
      },
      components:{
        Heard,Logo,List,Foot
      }
    }
</script>
<style scoped>
  .Box{
    width:100%;
  }
  /*轮播*/
  .Box .Broadcast{
    width:80%;
    height:400px;
    margin:0 auto;
    background: #c2ffec;
  }
  /*概要*/
  .Box .outline{
    width:80%;
    overflow: hidden;
    margin:0 auto;
    background: #f1f1f1;
  }
  /*新闻*/
  .Box .outline .outline_news{
    float: left;
    width:65%;
  }
  .Box .outline .outline_news{
    position: relative;
  }
  .con_1{
    margin-top:20px;
    background: #cbcbcb;
    width:100%;
    position: relative;
  }
  .con_1 p{
    text-align: left;
    height:30px;
    line-height:30px;
    font-size:18px;
    padding-left:20px;
  }
  .con_1 span{
    position: absolute;
    right:0px;
    top:0px;
    line-height:30px;
    font-size:14px;
    margin-right:20px;
  }
  .Box .outline .con_center{
    margin-top:10px;
  }
  .Box .outline .pice{
    width:60%;
    height:200px;
    position: relative;
    overflow: hidden;
    float: left;
  }
  .Box .outline .pice img{
    width:99%;
    height:198px;
  }
  .Box .outline .pice .xplain{
    position: absolute;
    bottom:0px;
    background: #fff;
    opacity:0.5;
    color: #000;
    width:100%;
    height:25px;
    line-height:25px;
    text-align: left;
  }

  .Box .outline .con_center .nes{
    width:40%;
    overflow: hidden;
    float: left;
    text-align: left;
    padding-left:5px;
    box-sizing: border-box;
  }
  .Box .outline .con_center .nes .nes_title{
    font-size:16px;
    font-weight:bolder;
  }
  .Box .outline .con_center .nes .new_center{
    font-size:14px;
  }
  .xq{
    text-decoration: none;
    color: #ff4334;
  }
  /*产品*/
  .Box .outline .outline_product{
    float: right;
    width:33%;
  }
  .Box .outline .outline_product .pice{
    width:100%;
    margin-top:10px;
  }
</style>
