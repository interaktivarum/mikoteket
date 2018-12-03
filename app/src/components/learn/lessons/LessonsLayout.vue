<template>
<div>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
        <h4>Lektioner</h4>
        <lessons-menu></lessons-menu>
      </div>

      <div class="columnCenter">

        <h1>
          {{lesson.data().name}}
        </h1>

        <lesson v-if="!excercise" :lesson="lesson"></lesson>
        <lesson-excercise v-if="excercise" :excercise="excercise" sub></lesson-excercise>

      </div>

      <div class="columnRight">
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import { store } from '@/store';

import LessonsMenu from './LessonsMenu.vue'
import Lesson from './Lesson.vue'
import LessonExcercise from './LessonExcercise.vue'
import Excercise from '@/components/learn/excercises/Excercise.vue'

import Landing from './data/Landing.vue'

export default {
  name: 'LessonsLayout',
  components: {
    LessonsMenu,
    Lesson,
    LessonExcercise,
    Excercise,
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
    lessons: function (){
      return store.state.lessons;
    },
    lesson: function () {
      let route = this.$route.params["lesson"];
      if(route && this.lessons){
        return this.lessons.find(lesson => lesson.data().route == route);
      }
      return Landing;
    },
    excercises: function (){
      return store.state.excercises;
    },
    excercise: function () {
      let route = this.$route.params["excercise"];
      if(route && this.excercises){
        return this.excercises.find(excercise => excercise.data().route == route);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chapter {
  margin-top: 20px;
}

.margin {
  margin-bottom: 20px;
}

.sponsor{
  max-width: 200px;
}

.chapterButtons{
  display: flex;
}

.chapterButtons > div{
  flex: 1 0 auto;
}

.chapterButtons > div{
  flex: 1 0 auto;
}

</style>
