import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/landing/Landing'
import Tracks from '@/components/learn/Tracks'
import LessonsLayout from '@/components/learn/lessons/LessonsLayout'
import ExcercisesLayout from '@/components/learn/excercises/ExcercisesLayout'
import Workshop from '@/components/workshop/WorkshopLanding'
import WorkshopMap from '@/components/workshop/WorkshopsMap'
import About from '@/components/about/AboutLanding'
import Press from '@/components/press/PressLanding'
import Guide from '@/components/guide/Guide'
import Resources from '@/components/resources/Resources'
import Accessibility from '@/components/accessibility/Accessibility'
import UpdateLog from '@/components/updates/UpdateLog'
import Download from '@/components/download/Download'
import Survey from '@/components/survey/SurveyLanding'
import Live from '@/components/live/LiveADW18'
import MH18 from '@/components/campaigns/MH18'
import Sandbox from '@/components/sandbox/Sandbox'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Landing
    },
    {
      name: 'Learn',
      path: '/digitalkompetens/:track?/:idChapter?',
      props: true,
      component: Tracks
    },
    {
      name: 'Lessons',
      path: '/material/lektioner/:lesson?/:excercise?',
      props: true,
      component: LessonsLayout
    },
    {
      name: 'Excercises',
      path: '/material/ovningar/:excercise?',
      props: true,
      component: ExcercisesLayout
    },
    {
      name: 'Workshop',
      path: '/workshop',
      props: true,
      component: Workshop
    },
    {
      name: 'WorkshopMap',
      path: '/workshopmap',
      props: true,
      component: WorkshopMap
    },
    {
      name: 'About',
      path: '/om',
      props: true,
      component: About
    },
    {
      name: 'Press',
      path: '/press',
      props: true,
      component: Press
    },
    {
      name: 'Guide',
      path: '/handledning',
      //props: true,
      //component: Guide
      redirect: '/resurser'
    },
    {
      name: 'Resources',
      path: '/resurser',
      props: true,
      component: Resources
    },
    {
      name: 'Accessibility',
      path: '/tillganglighet',
      props: true,
      component: Accessibility
    },
    {
      name: 'Updates',
      path: '/uppdateringar',
      props: true,
      component: UpdateLog
    },
    {
      name: 'Download',
      path: '/download',
      props: true,
      component: Download
    },
    {
      name: 'survey',
      path: '/kunskap',
      props: true,
      component: Survey
    },
    {
      name: 'alldigitalweek',
      path: '/live/adw18',
      props: true,
      component: Live
    },
    {
      path: '/mh18',
      props: true,
      component: MH18
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
