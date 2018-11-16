<template>

  <div>

    <ol>
      <li v-for="lesson in lessons">

        <router-link :to="'/material/lektioner/' + lesson.data().route">
          {{lesson.data().name}}
        </router-link>

        <ul v-if="matchesRoute(lesson.data().route)">
          <li v-for="excercise in lesson.data().excercises">
            <router-link :to="'/material/lektioner/' + lesson.data().route + '/' + excercise.data().route">
              {{excercise.data().name}}
            </router-link>
          </li>
        </ul>

      </li>
    </ol>

  </div>

</template>

<script>

import { store } from '@/store';

export default {
  name: 'ExcercisesMenu',
  components: {
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

  },
  methods: {
    matchesRoute: function (route) {
      return this.$route.params["lesson"] === route;
    }
  }
}
</script>

<style scoped>

  ul > li * {
    font-weight: 300;

  }

</style>
