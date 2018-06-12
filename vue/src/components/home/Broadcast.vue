<!--<template>
  <div class="bro">
    &lt;!&ndash;图片&ndash;&gt;
    <transition-group name="fade" tag="ul">
      <li v-for="(item,index) in imgUrl" :key="index"  :class="['bro_li']"  v-show="index===showId">
        <img :src=item.src>
      </li>
    </transition-group>
    &lt;!&ndash;小圈&ndash;&gt;
    <ul class="bro_lis">
      <li v-for="(item,index) in imgUrl" :class="[index===showId?'active_li':'']" @click="showImg(index)">
        {{item.id}}
      </li>
    </ul>
  </div>
</template>-->
<template>
  <div class="slide">
    <div class="slideshow">
      <transition-group tag="ul" :name="left?'image':'show'">
        <li v-for="(img, index) in imgArray" :key="index"   v-show="index===mark">
            <img :src=img.src>
        </li>
      </transition-group >
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :key="index" @click="change(index)">{{item.id}}</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              imgArray:[
                {
                  id:1,
                  src:"static/img/timg.jpg"
                },
                {
                  id:2,
                  src:"static/img/timg111.jpg"
                },
                {
                  id:3,
                  src:"static/img/timg22.jpg"
                },
                {
                  id:4,
                  src:"static/img/timg3.png"
                }
              ],
              mark:0,
              left:true
            }
        },
      methods:{
        autoPlay () {
          if(this.left){
            this.mark++;
            if (this.mark === 4) { //当遍历到最后一张图片置零
              this.mark = 3;
              this.left=false;
            }
          }
          if(!this.left){
            this.mark--;
            if(this.mark===-1){
              this.mark=0;
              this.left=true;
          }
          }
        },
        play () {
          setInterval(this.autoPlay, 2500)
        },
        change (i) {
          if(i>this.mark){
            this.left=true;
          }
          else{
            this.left=false
          }
          this.mark = i
        }
      },
      created () {
        this.play()
      }

    }
</script>
<style scoped="">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 400px;
  }
  li {
    position: absolute;
    width: 100%;
    height:100%;
  }
  img {
    width: 100%;
    height:100%;
    position:absolute;
    top:0px;
    left:0px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 20px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .show-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .show-leave-active {
    transform: translateX(100%);
    transition: all 1.5s ease;
  }
  .show-enter {
    transform: translateX(-100%);
  }
  .show-leave {
    transform: translateX(0);
  }
</style>
