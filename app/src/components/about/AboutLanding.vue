<template>
<div>

  <cover-image header="Om Mikoteket"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
        <h3>Kontakt</h3>
        <p>
          Martin Törnros
          <br/>
          <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
          <br/>
          0702-800054
        </p>
      </div>

      <div class="columnCenter">

        <p>
          Mikoteket erbjuder arbetsmaterial i olika spår inom <a-wiki c="Medie-_och_informationskunnighet">medie- och informationskunnighet</a-wiki> (MIK) och <a-wiki c="Digital_kompetens">digital kompetens</a-wiki>. Varje spår innehåller flera kapitel i vilka text och länkar varvas med bilder, videor och praktiska övningar som introducerar - och låter användaren prova - olika digitala verktyg.
        </p>

        <p>
          <router-link to="/digitalkompetens" class="button">Läs mer och ta del av arbetsmaterialet</router-link>
        </p>

        <h3>Hur kan jag använda Mikoteket?</h3>
        <p>
          Mikoteket är fritt att använda i icke-kommersiell utbildning och intern kompetensutveckling. Arbetsmaterialet är särskilt inriktat att användas som kompetensutveckling inom skola och bibliotek.
        </p>

        <p>
          För inbäddat material, e.g. bilder, videor, grafer, sociala inlägg, m.m., gäller respektive materials eller källas egna användningsrättigheter.
        </p>

        <p>
          Använder ni Mikoteket i er egen undervisning eller verksamhet? Kul, hör gärna av er och berätta om ert arbete!
        </p>

        <p>
          För frågor om användning och rättigheter, vänligen kontakta mig.
        </p>

        <h3>Workshops och föreläsningar</h3>

        <p>
          För att effektivt komma igång med Mikotekets arbetsmaterial rekommenderas att boka en workshop. Tillsammans går vi igenom plattformen och gräver djupare i ett eller flera av spåren med mängder av handledda praktiska övningar och diskussioner i grupp.
        </p>

        <p>
          <router-link to="workshop" class="button">Läs mer om workshops och föreläsningar</router-link>
        </p>

        <h3>Vem driver Mikoteket?</h3>
        <p>
          Mikoteket utvecklas och drivs av Martin Törnros, <a href="http://interaktivarum.se/" title="Interaktiva rum" target="_blank">Interaktiva rum</a>: designer, <a href="https://liu.se/utbildning/program/6cmen" title="Linköpings universitet: Medieteknik" target="_blank">medietekniker</a> och <a href="https://ccmc.gsfc.nasa.gov/staff/martin.php" title="CCMC: Martin Tornros" target="_blank">raketforskare</a> med stor nyfikenhet och förståelse för den teknik och design som vi använder dagligen.
        </p>
        <p>
          Mikoteket utvecklades ursprungligen hösten 2017 i samverkan med <a href="https://biblioteket.stockholm.se" title="Stockholm Stadsbibliotek" target="_blank">Stockholm Stadsbibliotek</a>, som fortbildningsplattform inom MIK för anställd bibliotekspersonal i regionen. Såväl plattformen som arbetsmaterialet utvecklas sedan dess vidare för att komma fler till nytta.
        </p>

        <h3>Samverkan kring nya spår</h3>
        <p>
          Saknar ni ett spår och tror att fler kan ha användning av kunskaperna? I samverkan med er utvecklas nytt arbetsmaterial med praktiska övningar och färdiga diskussionsfrågor. Materialet blir en fritt tillgänglig del av Mikoteket.
        </p>

        <p>
          <span class="semibold">Förslag på spår</span>:
          <ul>
            <li>
              <span class="semibold">Algoritmer</span>: vad är en algoritm och hur styr de vår vardag?
            </li>
            <li>
              <span class="semibold">Integritet på nätet</span>: hur och varför behöver du skydda dig?
            </li>
            <li>
              <span class="semibold">Näthät</span>: vad är näthat och hur kan det motarbetas?
            </li>
            <li>
              <span class="semibold">Informationsvisualisering</span>: make statistik fun again!
            </li>
            <li>
              <span class="semibold">Datadriven journalistik</span>: storytelling och att skapa engagemang.
            </li>
            <li>
              <span class="semibold">Matematik och fysik</span> i datorspel och Instagramfilter.
            </li>
          </ul>
        </p>

        <p>
          Som beställare av nya spår anges ni som sponsor med ert namn och er logotyp, och låter arbetsmaterialet komma fler till nytta.
        </p>

        <h3>Kontakt</h3>
        <p>
          Martin Törnros
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
import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'

export default {
  components: {
    ARoute,
    AWiki,
    CoverImage,
    InfoFields,
    MediaContainer
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
