<template>
  <div>
    <!--span class="semibold">Områden:</span-->
    <component v-for="(notion,key) in notions">
      <mik-notion :notion="notion" ></mik-notion>
      <!--span v-if="key != notions.length - 1">, </span-->
    </component>
  </div>
</template>

<script>

import MikNotion from './MikNotion.vue'

export default {
  components: {
    MikNotion
  },
  data () {
    return {
    }
  },
  props: {
    notions: []
  }
}
</script>

<style scoped>
</style>
