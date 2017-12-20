<template>
<div>

  <cover-image header="Workshops & föreläsningar"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
      </div>

      <div class="columnCenter">

        <p>
          Mikoteket erbjuder fortbildning inom medie- och informationskunnighet (MIK) och digital kompetens. Upplägget är särskilt inriktat mot skola och bibliotek och utgår från de <a href="http://www.regeringen.se/pressmeddelanden/2017/03/starkt-digital-kompetens-i-laroplaner-och-kursplaner/" title="Regeringen: Stärkt digital kompetens" target="_blank">förstärkta läroplanerna</a>.
        </p>

        <p>
          Utöver workshops och föreläsningar baserade på Mikotekets kapitel inom <a-route href="/digitalkompetens">Digital kompetens</a-route> erbjuds:

          <ul>
            <li>Workshops med det digitala verktyget <a href="http:/www.ekokammaren.se" title="Ekokammaren" target="_blank">Ekokammaren</a>, om filterbubblor och digital källkritik
            <li>Fortbildning och workshops inom tillämpad programmering, inriktning samhällskunskap och svenska</li>
            <li>Anpassade workshops och föreläsningar efter behov och önskemål</li>
          </ul>
        </p>

        <p>
          <h3>Kontakt och förfrågningar</h3>
            Martin Törnros, Interaktiva rum
            <br/>
            <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
            <br/>
            0702-800054
        </p>

      </div>

      <div class="columnRight">
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import ARoute from '@/components/ARoute.vue'
import CoverImage from '../CoverImage.vue'

export default {
  components: {
    ARoute,
    CoverImage
  },
  data () {
    return {
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
