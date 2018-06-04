<!--子路由  组件传递信息-->
<template>
  <div>
    <Heard></Heard>
    <Logo></Logo>
    <List></List>
    <div class="news_center">
      <div class="newsNav">
        <ul>
          <li v-for="(value,index) in borData.title">
            <!--子路由-->
            <router-link :to="{path:value.src}" exact  active-class="active">{{value.tle}}</router-link>
          </li>
        </ul>
        <div>
          <router-view/>
        </div>
      </div>
      <!--组件传递信息 props-->
      <div class="newsTab">
        <Broadcast :borData="borDD"></Broadcast>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script type="text/ecmascript-6">
  import Heard from "../heard.vue"
  import Logo from '../logo'
  import List from "../listnav"
  import Foot from "../foot"
  import Broadcast from '../Broadcast/Broadcast.vue'

  export default {
    data() {
      return {
        borData:{
          title:[
            {
              tle:'军事',
              type:'military',
              src:'/news'
            },
            {
              tle:'国际',
              type:'international',
              src:'/news/international'
            },
            {
              tle:'社会',
              type:'sociology',
              src:'/news/sociology'
            },
            {
              tle:'历史',
              type:'his',
              src:'/news/his'
            },
            {
              tle:'NBA',
              type:'NBA',
              src:'/news/NBA'
            },
            {
              tle:'基金',
              type:'fund',
              src:'/news/fund'
            },
            {
              tle:'股票',
              type:'shares',
              src:'/news/shares'
            },
            {
              tle:'手机',
              type:'phone',
              src:'/news/phone'
            },
            {
              tle:'外汇',
              type:'foreign',
              src:'/news/foreign'
            }
          ]
        },
        borDD:{
        title:[
          {
            tle:'军事',
            type:'military'
          },
          {
            tle:'国际',
            type:'international'
          },
          {
            tle:'社会',
            type:'sociology'
          }
        ],
          content:[
          {
            id:1,
            con:[
              {
                cc:'军事军事军事军事军事',
                src:'javascript:'
              },
              {
                cc:'军事军事军事军事军事',
                src:'javascript:'
              },
              {
                cc:'军事军事军事军事军事',
                src:'javascript:'
              }
            ]
          },
          {
            id:2,
            con:[
              {
                cc:'国际国际国际国际',
                src:'javascript:'
              },
              {
                cc:'国际国际国际国际',
                src:'javascript:'
              },
              {
                cc:'国际国际国际国际',
                src:'javascript:'
              }
            ]
          },
          {
            id:3,
            con:[
              {
                cc:'社会社会社会社会',
                src:'javascript:'
              },
              {
                cc:'社会社会社会社会社会',
                src:'javascript:'
              },
              {
                cc:'社会社会社会社会社会社会社会',
                src:'javascript:'
              }
            ]
          }
        ]
      },
        newsKey:0,
        listData:null
      }
    },
    components: {
      List, Heard, Logo, Foot,Broadcast
    },
    mounted() {
      //获取路由传递过来的参数
//          this.dd=this.$route.query.name;
    }
  };
</script>
<style scoped="">
  /*公用样式*/
  .news_center a {
    text-decoration: none;
    color: #12191f;
  }

  .news_center {
    width: 80%;
    margin: 10px auto;
    overflow: hidden;
    background: #f1f1f1;
  }

  /*列表*/
  .news_center .newsNav {
    width: 65%;
    float: left;
    overflow: hidden;
    border-right: 1px red solid;
    box-sizing: border-box;
  }
   ul {
    list-style: none;
    overflow: hidden;
  }
  .list_ul{
    border-bottom: 1px #ff2e33 solid;
  }
  .news_center .newsNav ul .newsNav_list {
    float: left;
    width: 11%;
    vertical-align: top;
    height: 30px;
    line-height: 30px;
  }
  .news_center .newsNav ul li{
    float: left;
    height:25px;
    line-height:25px;
    width:11%;
  }
  .news_center .newsNav .news_nn {
    display: none;
  }
  .news_center .newsNav .active{
    display: block;
  }

  .news_center .newsNav .news_nn .news_nn_list {
    text-align: left;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }

  /*选项卡*/
  .news_center .newsTab {
    width: 35%;
    float: left;
  }

  .active{
    color: red;
    background:pink;
  }
</style>
