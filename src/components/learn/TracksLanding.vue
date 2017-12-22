<template>
<div>

  <cover-image header="Digital kompetens" :collapsed="routes[$route.params['track']]" background="https://upload.wikimedia.org/wikipedia/commons/a/aa/Brain_anatomy_medical_head_skull_digital_3_d_x_ray_xray_psychedelic_3720x2631.jpg"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
      </div>

      <div class="columnCenter">

        <h3>Vad är digital kompetens?</h3>
        <p>
          <a href="https://sv.wikipedia.org/wiki/Digital_kompetens" title="Wikipedia: Digital kompetens" target="_blank">Digital kompetens</a> handlar om förmågan att använda digital teknik och internet, i vardagen såväl som i arbetet.
          Hur använder man en dator som ett effektivt verktyg, och hur hittar man pålitlig information på internet?
        </p>

        <p>
          Digital kompetens handlar även om att veta hur man kritiskt värderar information i digitala kanaler, och att veta när man behöver vara extra uppmärksam.
          Detta gäller oavsett om man själv har hittat informationen via en sökmotor, eller ifall informationen har dykt upp i sociala medier.
        </p>

        <h3>Fortbildning och praktiska övningar</h3>
        <p>
          Mikoteket erbjuder arbetsmaterial kring olika ämnen inom medie- och informationskunnighet (MIK) och digital kompetens.
          Varje ämne innehåller flera kapitel i vilka text varvas med bilder, videor och praktiska övningar som introducerar - och låter användaren prova - olika digitala verktyg.
        </p>

        <p>
          Aktuell forskning från <a href="https://www.iis.se/" title="Internetstiftelsen" target="_blank">Internetstiftelsens</a> årliga rapport <a href="http://www.svenskarnaochinternet.se/" title="Svenskarna och internet" target="_blank">Svenskarna och internet</a> ligger till grund för mycket av det statistiska innehållet som presenteras i form av interaktiva grafer, likt exemplet nedan.
        </p>

        <soi-graph graph="555"></soi-graph>

        <p>
          Kursmaterialet är anpassat som kompetensutveckling för lärare och bibliotekspersonal men riktar sig även till allmänheten. Nivån är anpassad för att fungera oavsett förkunskaper, med länkar till externt material för vidare fördjupning.
        </p>

        <h3>Ämnen</h3>

        <div v-for="(route, key) in routes">
          <a-route :href="'/digitalkompetens/'+key">{{route.data().header}}</a-route>
        </div>

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
import SoiGraph from '@/components/SoiGraph.vue'

export default {
  components: {
    ARoute,
    CoverImage,
    SoiGraph
  },
  data () {
    return {
    }
  },
  props: {
    routes: {}
  },
  computed: {
  }
}
</script>

<style>
</style>
