<!--产品页引用     分页-->
<template>
    <div class="product">
        <ul class="product_list">
          <li v-for="item in updatePageCom">
            <router-link :to="{path:'/proDetails',query:{name:item}}">
              <img :src="item.src" alt="">
            </router-link>
            <p>{{item.explain}}</p>
            <p class="mon">{{item.Price | money}}</p>
          </li>
        </ul>
        <!--分页-->
        <div class="paging">
          <span class="pageUp" @click="pageAdd">上一页</span>
            {{ pageIndex+1}}/{{pageTotal+1}}
          <span class="pageNext" @click="pageReduce">下一页</span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              //总的数据
              commodityData:[],
              //当前要显示的数据
              pageCom:[],
              //当前显示的页数
              pageIndex:0,
              //总的页数
              pageTotal:0
            }
        },
      /*读取数据*/
      created:function(){
        this.$axios.get("http://localhost:8080/static/commodity.json").then((res)=>{
          this.commodityData=res.data.data;
          //总的页数
          var pre=parseInt(res.data.data.length/12);
          if(pre===res.data.data.length/12){
            this.pageTotal=pre-1;
          }
          else{
            this.pageTotal=parseInt(res.data.data.length/12);
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      methods:{
        /*上一页*/
        pageAdd(){
          if(this.pageIndex>0){
            this.pageIndex--;
          }
        },
        /*下一页*/
        pageReduce(){
          if(this.pageIndex<this.pageTotal){
            this.pageIndex++;
          }
        }
      },
      computed:{
        /*计算当前要显示的条数*/
        updatePageCom(){
          if(this.commodityData.length>0){
            return this.pageCom=this.commodityData.slice(this.pageIndex*12,(this.pageIndex+1)*12)
          }
        }
      },

      filters:{
        /*给获取到的数据的价格添加价格符号*/
        money(value){
          return  '￥'+value;
        }
      }
    }
</script>
<style scoped>
.product_list{
  overflow: hidden;
  list-style: none;
  width:100%;
}
  .product_list li{
    float: left;
    width:25%;
    position: relative;
    margin-top:10px;
    cursor: pointer;
  }
.product_list li img{
  width:90%;
  display: block;
  margin:0 auto;
  margin-bottom:10px;
}
.product_list li img:hover{
  transform: scale(1.1);
}
.product_list li p{
  width:100%;
  line-height:25px;
  text-align: left;
  background: rgba(20, 20, 20, 0.5);
  color: #d6d6d6;
}
.product_list li p.mon{
    text-align: center;
  }
  .paging{
    overflow: hidden;
  }
  .paging span{
    cursor: pointer;
  }
</style>
