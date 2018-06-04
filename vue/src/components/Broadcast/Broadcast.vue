<!--轮播-->
<template>
    <div class="broad">
      <ul class="broad_title">
        <li v-for="(item,index) in borData.title" :key="index" @click="onchangIndex(index)" :style="{width: llWidth + '%' }" :class="[index===borIndex?'Active':'']">{{item.tle}}</li>
      </ul>
      <div v-for="(item,index) in borData.content" :class="['broad_content',index===borIndex?'active':'']">
        <ul>
          <li v-for="ids in item.con">
            <a :href=ids.src>{{ids.cc}}</a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name:'broadcast',
        data() {
            return {
              borIndex:0,
              liWidth:0
            }
        },
      props:{
        borData:{
          type:[String, Object],
          default: function () {
            return {
              title:[],
              content:[]
            }
          },
        }
      },
      methods:{
        onchangIndex(index){
          this.borIndex=index;
        },
      },
      computed:{
        llWidth(){
          return this.liWidth=100/this.borData.title.length;
        }
      }
    }
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #1d533b;
  }
  a:hover{
    color: #ff7b4e;
  }
  .broad{
    width:100%;
    overflow: hidden;
  }
  .broad .broad_title{
    width:100%;
    height:30px;
    list-style: none;
  }
  .broad .broad_title li{
    float: left;
    width:40px;
    font-size:18px;
    cursor: pointer;
  }
  .broad_content{
    width:100%;
    display: none;
  }
  .broad_content ul li{
    height:25px;
    line-height:25px;
    text-align: left;
  }
  .active{
    display: block;
  }
  .Active{
    background: #ffe6c9;
  }
</style>
