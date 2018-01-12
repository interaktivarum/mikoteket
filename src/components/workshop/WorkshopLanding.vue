<template>
<div>

  <cover-image header="Workshops & föreläsningar"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
        <h3>Kontakt och förfrågningar</h3>
        <p>
          Martin Törnros, Interaktiva rum
          <br/>
          <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
          <br/>
          0702-800054
        </p>
      </div>

      <div class="columnCenter">

        <p>
          Mikoteket är utvecklat av Martin Törnros, Interaktiva rum. Jag erbjuder fortbildning inom <a-wiki c="Medie-_och_informationskunnighet">medie- och informationskunnighet</a-wiki> (MIK) och <a-wiki c="Digital_kompetens">digital kompetens</a-wiki>. Upplägget är särskilt inriktat mot skola och bibliotek och utgår från de <a href="http://www.regeringen.se/pressmeddelanden/2017/03/starkt-digital-kompetens-i-laroplaner-och-kursplaner/" title="Regeringen: Stärkt digital kompetens" target="_blank">förstärkta läroplanerna</a>.
        </p>

        <h3>Innehåll</h3>
        <ul>
          <li>
            Föreläsning utifrån Mikotekets spår inom digital kompetens.
          </li>
          <li>
            Mycket praktiska övningar och diskussioner i grupp.
          </li>
          <li>
            Introduktion till, och prova på praktiska verktyg.
          </li>
          <li>
            Tillgång till färdigt upplägg och presentationsmaterial för vidare utbildning av, exempelvis, kollegor eller elever.
          </li>
          <li>
            Tillgång till <a href="https://mikoteket.slack.com" title="Slack: Mikoteket" target="_blank">Mikotekets gemensamma diskussionsgrupp på Slack</a>: fråga och diskutera med andra deltagare.
          </li>
          <li>
             Personlig chatsupport på Slack i 30 dagar.
          </li>
        </ul>

        <h3>Tid & upplägg</h3>
        <p>
          Räkna med att avsätta minst 2 timmar för en workshop som täcker ett spår. Upplägget utgår ifrån ert egna behov och önskemål. Det går exempelvis bra att låta fortbilda utvald personal på er arbetsplats, som senare, med hjälp av det fria arbetsmaterialet, utbildar sina kollegor.
        </p>

        <p>
          Vid önskemål erbjuds 30 minuters introduktion till verktyget Slack.
        </p>

        <h3>Kostnad</h3>
        Arvodeskostnaden utgår ifrån <a href="http://www.forfattarforbundet.se/radgivning/arvodesrekommendationer/framtradandearvode/" title="Författarförbundet" target="_blank">Författarförbundets rekommendationer för framträdande</a>.

        <h3>Sponsra nya spår</h3>
        <p>
          Saknar ni ett spår och tror att fler kan ha användning av kunskaperna? I samråd med er tar jag fram nytt arbetsmaterial efter behov och önskemål, som sedan blir en del av Mikoteket. Som beställare av nya spår anges ni som sponsor med ert namn och er logotyp, och låter arbetsmaterialet komma fler till nytta. Kostnad efter innehåll och överenskommelse.
        </p>

        <h3>Övrigt</h3>

        <p>
          Utöver workshops och föreläsningar baserade på Mikotekets spår inom digital kompetens erbjuds:

          <ul>
            <li>Workshops med det digitala verktyget <a href="http://www.ekokammaren.se" title="Ekokammaren" target="_blank">Ekokammaren</a>, om filterbubblor och digital källkritik.</li>
            <li>Fortbildning och workshops inom tillämpad programmering, inriktning samhällskunskap och svenska.</li>
            <li>Anpassade workshops och föreläsningar efter behov och önskemål.</li>
          </ul>

        </p>

        <h3>Kontakt och förfrågningar</h3>
        <p>
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
import AWiki from '@/components/AWiki.vue'
import CoverImage from '../CoverImage.vue'

export default {
  components: {
    ARoute,
    AWiki,
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
