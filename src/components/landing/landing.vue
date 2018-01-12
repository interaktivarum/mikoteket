<template>
<div>

  <cover-image header="Mikoteket"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
      </div>

      <div class="columnCenter">

        <h3>Fortbildning och kompetensutveckling</h3>
        <p>
          Mikoteket erbjuder arbetsmaterial i olika spår inom medie- och informationskunnighet (MIK) och digital kompetens. Varje spår innehåller flera kapitel i vilka text och länkar varvas med bilder, videor och praktiska övningar som introducerar - och låter användaren prova - olika digitala verktyg.
        </p>

        <p>
          Allt material är fritt att använda i utbildning och kompetensutveckling.
        </p>

        <p>
          <a-route href="/digitalkompetens">Läs mer och ta del av arbetsmaterialet</a-route>
        </p>
        <p>
          <a-route href="/workshop">Boka workshop och föreläsning</a-route>
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

import CoverImage from '../CoverImage.vue'
import ARoute from '@/components/ARoute.vue'

export default {
  components: {
    CoverImage,
    ARoute
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
