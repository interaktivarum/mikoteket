<template>
  <div>

    <div v-for="w in workshops.filter(w => new Date(w.date) >= Date.now())">
      <a :href="w.url" target="_blank" v-if="w.url">
        {{w.name}}
      </a>
      <br />
      <span class="semibold">
        {{w.organizer}}
      </span>
      <br />
      <span>
        {{w.date}}
      </span>
      <br />
      <span class="gray">
        {{w.type}}
      </span>
    </div>

  </div>
</template>

<script>

import Workshops from './workshops.json'

export default {
  components: {
  },
  data () {
    return {
      workshops: Workshops.workshops,
    }
  },
  props: {
  },
  computed: {
  }
}
</script>

<style>
</style>
