<template>
<div>

  <cover-image header="Musikhjälpen 2018"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">

        <h3>Insamling</h3>
        <a href="https://bossan.musikhjalpen.se/insamlingar/mikoteket-7cbfc4d7-bfac-417f-9088-c22362f6a5a0" target="_blank">Länk till insamlingen</a>

      </div>

      <div class="columnCenter">

        <p>
          Årets tema för Musikhjälpen är <a href="https://sverigesradio.se/sida/artikel.aspx?programid=3946&artikel=7045359" target="_blank">Alla har rätt att funka olika</a>. Människor med funktionsnedsättning är en av världens mest diskriminerade grupper. Många fastnar i fattigdom, stängs ute och osynliggörs på grund av hinder och stigman. Med funktionsnedsättning är risken stor att drabbas hårdare av nöd och katastrof - och få hjälp sist.
        </p>

        <p>
          Mikoteket har nyligen lanserat fritt tillgängligt arbetsmaterial om <router-link :to="{ name: 'Learn', params: {'track': 'tillganglighet'} }">Digital tillgänglighet</router-link> i samverkan med Länsbibliotek Sörmland, och startar nu en insamlingsbössa för att stödja Musikhjälpens arbete för en tillgängligare värld.
        </p>

        <h3>Insamling</h3>
        <p>
          <a href="https://bossan.musikhjalpen.se/insamlingar/mikoteket-7cbfc4d7-bfac-417f-9088-c22362f6a5a0" target="_blank">Länk till insamlingen</a> på Musikhjälpens webbplats.
        </p>

        <a href="https://bossan.musikhjalpen.se/insamlingar/mikoteket-7cbfc4d7-bfac-417f-9088-c22362f6a5a0" target="_blank" class="nohover">
          <img src="https://filer.mikoteket.se/kampanjer/mh18.png" alt="Musikhjälpen logotyp, stöd Musikhjälpen"/>
        </a>


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
import AWiki from '@/components/AWiki.vue'
import CoverImage from '../CoverImage.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import Quote from '@/components/quote.vue'

export default {
  components: {
    ARoute,
    AWiki,
    CoverImage,
    InfoFields,
    MediaContainer,
    Quote
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

<style scoped>

  img {
    width: 400px !important;
  }

</style>
