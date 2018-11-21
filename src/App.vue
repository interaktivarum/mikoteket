<template>
  <div id="App">

    <!--div id="fb-root"></div-->

    <header-component class="header"></header-component>

    <router-view class="mainContent" :class="{'bg-contrast': accessibility.contrast}"/>

    <mik-footer class="footer"></mik-footer>

    <background-contrast :active="accessibility.contrast"></background-contrast>
    <cursor-highlight :active="accessibility.ruler"></cursor-highlight>
    <dyslexia :active="accessibility.dyslexia"></dyslexia>

    <!--div href="https://www.mikoteket.se" class="fb-quote"></div-->

  </div>
</template>

<script>

import { store } from './store';

import HeaderComponent from '@/components/Header.vue'
import MikFooter from '@/components/MikFooter.vue'

//Lessons
import Landing from '@/components/learn/lessons/data/Landing.vue'
import DigitalSourceCriticism from '@/components/learn/lessons/data/DigitalSourceCriticism.vue'
import Algorithms from '@/components/learn/lessons/data/Algorithms.vue'
import SearchEngines from '@/components/learn/lessons/data/SearchEngines.vue'
import SocialMedia from '@/components/learn/lessons/data/SocialMedia.vue'
import Viral from '@/components/learn/lessons/data/Viral.vue'
import EchoChambers from '@/components/learn/lessons/data/EchoChambers.vue'

//Excercises
import ExcercicesLanding from '@/components/learn/excercises/data/Landing.vue'
import SearchIntro from '@/components/learn/excercises/data/SearchIntro.vue'
import SearchKeywords from '@/components/learn/excercises/data/SearchKeywords.vue'
import SearchLeading from '@/components/learn/excercises/data/SearchLeading.vue'

//Accessibility
import BackgroundContrast from '@/components/accessibility/BackgroundContrast.vue'
import CursorHighlight from '@/components/accessibility/CursorHighlight.vue'
import Dyslexia from '@/components/accessibility/Dyslexia.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    MikFooter,
    BackgroundContrast,
    CursorHighlight,
    Dyslexia
  },
  computed: {
    accessibility: function () {
      return store.state.accessibility
    }
  },
  data () {
    return {
      lessons: [
        DigitalSourceCriticism,
        Algorithms,
        SearchEngines,
        SocialMedia,
        Viral,
        EchoChambers
      ],
      excercises: [
        ExcercicesLanding,
        SearchIntro,
        SearchKeywords,
        SearchLeading
      ]
    }
  },
  mounted: function () {
    store.commit('setLessons',this.lessons);
    store.commit('setExcercises',this.excercises);
  }
}
</script>

<style scoped>

</style>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
@import '/assets/style/style.css';
@import '/assets/style/form.css';
@import '/assets/style/flex.css';
@import '/assets/style/text.css';
@import '/assets/style/animations.css';

#app{
  background: red;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

</style>
