<template>
  <div>

    <excercise :excercise="excercise" sub></excercise>

  </div>
</template>

<script>

import Excercise from '@/components/learn/excercises/Excercise.vue'

export default {
  name: 'LessonExcercise',
  components: {
    Excercise
  },
  data () {
    return {

    }
  },
  props: {
    excercise: {}
  },
  computed: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
