<template>
  <div>

    <slide-component>
      <ul>
        <li>Internet: mängder av subjektiv och objektiv information</li>
        <li>Stora möjligheter att publicera och sprida eget material</li>
        <li>Digitalt material är enkelt att manipulera</li>
        <li>Mål: värdera källor och information online</li>
      </ul>
    </slide-component>

    <p>
      <a-wiki c="Internet">Internet</a-wiki> innehåller en enorm mängd data, och det går att hitta information och åsikter kring det mesta. Saklig och objektiv fakta är ofta enkelt att hitta med hjälp av en <a-wiki c="Söktjänst">sökmotor</a-wiki>, medan ämnen kring vilka det finns spridda åsikter kräver att du som användare ställer dig kritisk till den information du tar del av.
    </p>

    <p>
      För den som vill skapa och publicera eget innehåll innebär internet stora möjligheter. Även om det kan våra svårt att nå ut i bruset så erbjuder <a-wiki c="sociala_medier">sociala medier</a-wiki> riktade kanaler för att göra sin röst hörd, och anpassade verktyg gör det enkelt att till en låg kostnad skapa en egen <a-wiki c="Webbplats">webbplats</a-wiki>. Detta innebär att vem som helst kan publicera nästan vad som helst och göra det fritt tillgängligt för alla att ta del av.
    </p>

    <p>
      Digitalt material innebär också stora möjligheter att manipulera innehåll. Som en följd innebär detta att internet är fyllt av såväl sanningar som osanningar, och allt där emellan.
    </p>

    <p>
      <a href="https://www.iis.se/" title="Internetstiftelsen" target="_blank">Internetstiftelsens</a> forskning <a href="http://www.soi2017.se/" title="Svenskarna och internet" target="_blank">Svenskarna och internet 2017</a> visar att många, framförallt äldre, <a href="http://www.soi2017.se/soka-och-vardera-information-pa-internet" title="SOI: Sökord" target="_blank">svenskar saknar information om hur man värderar information på nätet</a>. Du kommer i kommande kapitel lära dig hur information sprids på nätet, hur du värderar den information du hittar och hur du granskar onlinekällor.
    </p>

    <soi-graph graph="663"></soi-graph>

    <info-fields class="infoFields">

			<div class="summary">

				<div class="hBox">
					SAMMANFATTNING
				</div>

				Internet innehåller en enorm mängd data och erbjuder stora möjligheter att skapa eget innehåll, och manipulera befintligt material. Som en följd är internet fyllt av såväl sanningar som osanningar, och allt där emellan.

			</div>

		</info-fields>

  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import SoiGraph from '@/components/SoiGraph.vue'
import SlideComponent from '@/components/learn/SlideComponent.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    SoiGraph,
    SlideComponent
  },
  data () {
    return {
      'header': 'Introduktion'
    }
  },
  created () {
  }
}
</script>

<style>
</style>
