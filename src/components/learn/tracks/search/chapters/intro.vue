<template>
  <div>

    <slide-component>
			<ul>
				<li>Internet: världens största datornätverk</li>
				<li>Fantastiska möjligheter - men överflöd av information</li>
				<li>Behov av filter och algoritmer för att navigera</li>
				<li>Mål: sök smart och värdera informationen</li>
			</ul>
    </slide-component>

    <p>
			<a href="https://sv.wikipedia.org/wiki/Internet" title="Wikipedia: Internet" target="_blank">Internet</a> är världens största nätverk av sammankopplade datorer som tillsammans innehåller en otrolig mängd data. Det innebär fantastiska möjligheter att hitta information om i stort sett vad som helst.
		</p>

		<p>
			Problemet är just att vi har ett <i>överflöd</i> av information som är helt omöjligt att överblicka och navigera i manuellt, och vi har därför behov av filter och <a href="https://sv.wikipedia.org/wiki/Algoritm" title="Wikipedia: Algoritm" target="_blank">algoritmer</a> som hanterar informationsflödet åt oss. I grund och botten är de allra flesta sådana algoritmer designade för att ge dig som användare en så smidig och trevlig upplevelse som möjligt, och är anpassade för att ge personliga resultat. Ett exempel på tjänster som använder sådana algoritmer är <a href="https://sv.wikipedia.org/wiki/S%C3%B6ktj%C3%A4nst" title="Wikipedia: Söktjänst" target="_blank">sökmotorer</a> som ger resultat baserat på din geografiska position, din och andra användares internethistorik och andra personliga parametrar.
		</p>

		<p>
			<a href="https://www.iis.se/" title="Internetstiftelsen" target="_blank">Internetstiftelsens</a> forskning <a href="http://www.soi2017.se/" title="Svenskarna och internet" target="_blank">Svenskarna och internet 2017</a> visar att vi <a href="http://www.soi2017.se/soka-och-vardera-information-pa-internet" title="SOI: Sökord" target="_blank">svenskar tycker det är enkelt att hitta bra sökord</a> vid webbsökning, men att många, framförallt äldre personer, saknar information om hur man värderar information på nätet. Du kommer i kommande kapitel lära dig att både söka smart samt skapa en förståelse för varför du behöver vara kritisk till sökresultaten.
		</p>

    <soi-graph graph="661"></soi-graph>

    <info-fields class="infoFields">

			<div class="excercise">

				<div class="hBox">
					TESTA SJÄLV: EN ENKEL SÖKNING PÅ FISK
				</div>

				<p>
					Använd sökfältet nedan för att söka på <i>fisk</i> med olika sökmotorer. Du omdirigeras automatiskt till respektive sökmotors resultatsida.
				</p>

				<search-component query="fisk"></search-component>

				<div class="hBox">
					DISKUTERA
				</div>

				<ul>
					<li>Handlar resultaten om biologi, mat eller annat?</li>
					<li>Hur är resultaten personligt anpassade till dig?</li>
					<li>Hur presenteras de olika resultaten?</li>
				</ul>

			</div>

			<div class="summary">

				<div class="hBox">
					SAMMANFATTNING
				</div>

				Internet innehåller en enorm och oöverskådlig mängd data. Vi använder sökmotorer för att navigera och hitta den information vi söker.

			</div>

			<div class="more">

				<div class="hBox">
					FÖRDJUPNING
				</div>

				Google reflekterar över sitt uppdrag som sökmotor: <a href="https://www.google.com/search/howsearchworks/mission/" target="_blank">Our mission: Organize the world’s information and make it universally accessible and useful.</a> (engelska)
			</div>

		</info-fields>

  </div>
</template>

<script>

import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'
import SoiGraph from '@/components/SoiGraph.vue'
import SlideComponent from '@/components/learn/SlideComponent.vue'

export default {
  components: {
    InfoFields,
    MediaContainer,
    SearchComponent,
    SoiGraph,
    SlideComponent
  },
  data () {
    return {
      'header': 'Introduktion'
    }
  }
}
</script>

<style>
</style>
