// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import vuex from 'vuex'

Vue.use(vuex);
var store = new vuex.Store({//store对象
    state:{//state
      cps:[]
      //show:false
    },
    getters:{
      not_show(state){//这里的state对应着上面这个state
        return !state.show;
      }
    },
  //commit：同步操作，写法：this.$store.commit('mutations方法名',值)
    mutations:{
      switch_dialog(state,value){//这里的state对应着上面这个state
        var isCp=false;
        for(var item in state.cps){
          if(state.cps[item].id===value.id){
            state.cps[item].index =value.index;
            isCp = true;
            //console.log(state.cps);

          }
        }
        if(!isCp){
            state.cps.push(value);
            //console.log(state.cps);
        }
        //state.show = value;
        //你还可以在这里执行其他的操作改变state
      }
    },
  //dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('mutations方法名',值)
    actions:{
      switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
        context.commit('switch_dialog');
        //你还可以在这里触发其他的mutations方法
      },
    }
});

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
