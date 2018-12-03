<template>
  <div>

    <component :is="lesson" class="component"></component>

    <div v-if="landing != false">
      
      <h2>Uppgifter</h2>

      <p class="info">
        Nedan följer ett antal uppgifter för lektionen <i>{{lesson.data().name}}</i>. Varje uppgift innehåller en kort text om ämnet, en övning att utföra samt ett antal frågor att diskutera i grupp.
      </p>

      <div v-for="excercise in lesson.data().excercises">
        <h3>
          {{excercise.data().name}}
        </h3>
        <router-link :to="'/material/lektioner/' + lesson.data().route + '/' + excercise.data().route">
          Gör uppgiften: {{excercise.data().name}}
        </router-link>
      </div>

    </div>

    <!--excercise-embed v-for="excercise in lesson.data().excercises" :excercise="excercise"></excercise-embed-->

  </div>
</template>

<script>

import { store } from '@/store';

import ExcerciseEmbed from '@/components/learn/excercises/ExcerciseEmbed.vue'

export default {
  name: 'Lesson',
  components: {
    ExcerciseEmbed
  },
  data () {
    return {

    }
  },
  props: {
    lesson: {}
  },
  computed: {
    landing: function () {
      return this.$route.params["lesson"] != undefined;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.info{

}

</style>
