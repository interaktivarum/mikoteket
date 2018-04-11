import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/landing/Landing'
import Tracks from '@/components/learn/Tracks'
import Workshop from '@/components/workshop/WorkshopLanding'
import About from '@/components/about/AboutLanding'
import Press from '@/components/press/PressLanding'
import Live from '@/components/live/LiveADW18'
import Sandbox from '@/components/sandbox/Sandbox'

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
      name: 'press',
      path: '/press',
      props: true,
      component: Press
    },
    {
      name: 'alldigitalweek',
      path: '/live/adw18',
      props: true,
      component: Live
    },
    {
      path: '/sandbox',
      props: true,
      component: Sandbox
    },
    {
      name: 'undefined',
      path: '*',
      redirect: '/'
    }
  ]
})
