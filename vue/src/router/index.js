import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import News from '@/components/news/news'
import Product from '@/components/product/product'
import ProDetails from '@/components/product/ProDetails'
import Details from '@/components/news/details'
import NBA from '@/components/news/child/NBA'
import Military from '@/components/news/child/military'
import International from '@/components/news/child/international'
import Sociology from '@/components/news/child/sociology'
import His from '@/components/news/child/history'
import Fund from '@/components/news/child/fund'
import Shares from '@/components/news/child/shares'
import Phone from '@/components/news/child/phone'
import Foreign from '@/components/news/child/foreign'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode:'history',
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/news',
      component:News,
      children:[
        {
          path:'/',
          name:'military',
          component:Military
        },
        {
          path:'international',
          name:'international',
          component:International
        },
        {
          path:'sociology',
          name:'sociology',
          component:Sociology
        },
        {
          path:'his',
          name:'his',
          component:His
        },
        {
          path:'NBA',
          name:'NBA',
          component:NBA
        },
        {
          path:'fund',
          name:'fund',
          component:Fund
        },
        {
          path:'shares',
          name:'shares',
          component:Shares
        },
        {
          path:'phone',
          name:'phone',
          component:Phone
        },
        {
          path:'foreign',
          name:'foreign',
          component:Foreign
        }
      ]
    },
    {
      path:'/product',
      name:'product',
      component:Product
    },
    {
      path:'/details',
      name:'details',
      component:Details
    }
    ,
    {
      path:'/proDetails',
      name:'proDetails',
      component:ProDetails
    }
  ]
})
