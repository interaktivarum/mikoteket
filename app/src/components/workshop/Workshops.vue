<template class="Workshops">
  <div>

    <h4 v-if="workshops.filter(w => new Date(w.date) >= Date.now()).length">Kommande evenemang</h4>

    <div v-for="w in workshops.filter(w => new Date(w.date) >= Date.now())">
      <br />
      <span v-if="w.name">
        <span v-if="w.url">
          <a :href="w.url" target="_blank" >
            {{w.name}}
          </a>
        </span>
        <span v-else>
          {{w.name}}
        </span>
        <br />
      </span>
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

<style scoped>

</style>
