<template>
<div>

  <cover-image header="Digital kompetens" :collapsed="routes[$route.params['track']]" background="https://upload.wikimedia.org/wikipedia/commons/a/aa/Brain_anatomy_medical_head_skull_digital_3_d_x_ray_xray_psychedelic_3720x2631.jpg"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
        <h3>Spår</h3>
        <div v-for="(route, key) in routes">
          <a-route :href="'/digitalkompetens/'+key">{{route.data().header}}</a-route>
        </div>
      </div>

      <div class="columnCenter">

        <h3>Vad är digital kompetens?</h3>
        <p>
          <a-wiki c="Digital_kompetens">Digital kompetens</a-wiki> handlar om förmågan att använda digital teknik och <a-wiki c="internet">internet</a-wiki>, i vardagen såväl som i arbetet. Hur använder man en dator som ett effektivt verktyg, och hur hittar man pålitlig information på internet?
        </p>

        <p>
          Digital kompetens handlar även om att veta hur man kritiskt värderar information i digitala kanaler, och att veta när man behöver vara extra uppmärksam. Detta gäller oavsett om man själv har hittat informationen via en <a-wiki c="Söktjänst">sökmotor</a-wiki>, eller ifall informationen har dykt upp i <a-wiki c="sociala_medier">sociala medier</a-wiki>.
        </p>

        <h3>Fortbildning och praktiska övningar</h3>
        <p>
          Mikoteket erbjuder arbetsmaterial i olika spår inom <a-wiki c="Medie-_och_informationskunnighet">medie- och informationskunnighet</a-wiki> (MIK) och digital kompetens. Varje spår innehåller flera kapitel i vilka text och länkar varvas med bilder, videor och praktiska övningar som introducerar - och låter användaren prova - olika digitala verktyg.
        </p>

        <p>
          Aktuell forskning från <a href="https://www.iis.se/" title="Internetstiftelsen" target="_blank">Internetstiftelsens</a> årliga rapport <a href="http://www.svenskarnaochinternet.se/" title="Svenskarna och internet" target="_blank">Svenskarna och internet</a> ligger till grund för mycket av det statistiska innehållet, likt grafen nedan som visar svenskarnas tillgång till internet och teknik i hemmet.
        </p>

        <soi-graph graph="555"></soi-graph>

        <p>
          Arbetsmaterialet är framtaget som kompetensutveckling för lärare och bibliotekspersonal men riktar sig även till allmänheten. Nivån är anpassad för att fungera oavsett förkunskaper, med länkar till externt material för vidare fördjupning.
        </p>

        <p>
          Allt material är fritt att använda i utbildning och kompetensutveckling.
        </p>

        <h3>Spår</h3>

        <div v-for="(route, key) in routes">
          <a-route :href="'/digitalkompetens/'+key">{{route.data().header}}</a-route>
        </div>

        <p>
          Saknar ni ett spår? <a-route href="workshop">Sponsra ett nytt spår</a-route> och låt arbetsmaterialet komma fler till nytta.
        </p>

      </div>

      <div class="columnRight">
        <p class="small">
          <strong>Vill du surfa privat?</strong>
          <br />
          Öppna ett privat/inkognitofönster i din webbläsare.
        </p>
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import ARoute from '@/components/ARoute.vue'
import AWiki from '@/components/AWiki.vue'
import CoverImage from '../CoverImage.vue'
import SoiGraph from '@/components/SoiGraph.vue'

export default {
  components: {
    ARoute,
    AWiki,
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
