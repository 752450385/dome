<template>
    <div class="foot">
      <ul v-for="(items,index) in footdata">
        <p class="active">{{items.title}}</p>
        <li v-for="(item,key) in items.center" :class="['a']"><a :href=item.src>{{item.cen}}</a></li>
      </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              footdata:[
                {
                  title:'走进公司',
                  center:[
                    {
                      cen:'董事长寄语',
                      src:'javascript:'
                    },
                    {
                      cen:'联系我们',
                      src:'javascript:'
                    }
                  ]
                },
                {
                  title:'热点聚焦',
                  center:[
                    {
                      cen:'公司活动',
                      src:'javascript:'
                    },
                    {
                      cen:'公司招聘',
                      src:'javascript:'
                    }
                  ]
                },
                {
                  title:'友情链接',
                  center:[
                    {
                      cen:'百度',
                      src:'javascript:'
                    },
                    {
                      cen:'腾讯',
                      src:'javascript:'
                    }
                  ]
                }
              ]
            }
        }
    }
</script>
<style scoped>
  .foot{
    width:100%;
    overflow: hidden;
    background: #5d5d58;
    height:300px;
    padding-left:12%;
    padding-top:20px;
  }
  .foot ul{
    float: left;
    list-style: none;
    color: #e0e0e0;
    margin-right:20px;
  }
  .foot .a{
    width:150px;
  }
  .foot .active{
    font-size:30px;
  }
  .foot a{
    text-decoration: none;
    color: #9c9c9c;
    display: inline-block;
    line-height:40px;
  }
</style>
