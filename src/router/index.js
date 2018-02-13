import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/landing/Landing'
import Tracks from '@/components/learn/Tracks'
import Workshop from '@/components/workshop/WorkshopLanding'
import About from '@/components/about/AboutLanding'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Landing
    },
    {
      name: 'learn',
      path: '/digitalkompetens/:track?/:idChapter?',
      props: true,
      component: Tracks
    },
    {
      name: 'workshop',
      path: '/workshop',
      props: true,
      component: Workshop
    },
    {
      name: 'about',
      path: '/om',
      props: true,
      component: About
    },
    {
      name: 'undefined',
      path: '*',
      redirect: '/'
    }
  ]
})