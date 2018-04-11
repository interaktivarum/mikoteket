<template>
  <div>

    <h1>Sandbox</h1>

    <og-embed url="https://digitalsamtal.se/122-om-digital-kallkritik-med-martin-tornros/"></og-embed>

    <br />

    <og-embed url="http://sverigesradio.se/sida/artikel.aspx?programid=2689&artikel=6900408"></og-embed>

    <br />

    <iframe width="900px" height="150" src="https://sverigesradio.se/embed/publication/6900408" frameborder="0"></iframe>

    <br />

    <og-embed url="https://www.metro.se/artikel/han-har-gjort-det-enklare-att-f%C3%B6rst%C3%A5-k%C3%A4llkritik-p%C3%A5-n%C3%A4tet-prisas-f%C3%B6r-sina-insatser"></og-embed>

    <br />

    <og-embed url="https://www.voister.se/artikel/2018/02/ekokammarense-for-kallkritik-i-klassrummet/"></og-embed>

    <br />

    <og-embed url="https://www.medievarlden.se/2017/02/ekokammaren-ett-synliggorande-av-filterbubblor/"></og-embed>

  </div>
</template>

<script>

import OgEmbed from '@/components/OgEmbed.vue'

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
