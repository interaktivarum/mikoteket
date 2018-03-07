<template>
  <div>

    <h1>Sandbox</h1>

    <og-embed url="https://www.metro.se/artikel/han-har-gjort-det-enklare-att-f%C3%B6rst%C3%A5-k%C3%A4llkritik-p%C3%A5-n%C3%A4tet-prisas-f%C3%B6r-sina-insatser"></og-embed>

  </div>
</template>

<script>

import OgEmbed from './OgEmbed.vue'

export default {
  components: {
    OgEmbed
  },
  props: {
    header: {},
    background: {},
    //collapsed: {default: false},
    route: {},
    routeName: {}
  }
}
</script>

<style scoped>

</style>
