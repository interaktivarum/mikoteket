<template>
  <div>

    <p>
      Idag har en övervägande majoritet av Sveriges befolkning <a href="https://2018.svenskarnaochinternet.se/allmant-om-internetutvecklingen/" target="_blank">tillgång till dator, smart mobil och internet i hemmet</a>, vilket har öppnat upp för en mängd spännande tekniska innovationer. Men även om teknikanvändningen är utbredd i landet är det många som inte har möjlighet att utnyttja den, till exempel på grund av en <a href="https://www.1177.se/Stockholm/Fakta-och-rad/Sjukdomar/Funktionsnedsattning/" target="_blank">funktionsnedsättning</a>, till följd av en skada eller på grund av åldersrelaterade symptom. Enligt <a href="https://2018.svenskarnaochinternet.se/" target="_blank">Svenskarna och internet 2018</a> är det idag <a href="https://2018.svenskarnaochinternet.se/digitalt-utanforskap/" target="_blank">en halv miljon svenskar som aldrig använder internet</a>. De två främsta skälen uppges vara <i>inget intresse/inte användbart</i> samt <i>krånglig teknik/kan inte</i>, vilket belyser vikten av att designa tillgänglig teknik med användaren i fokus.
    </p>

    <soi-graph graph="779"></soi-graph>

    <p>
			I detta spår kommer digital teknik att diskuteras ur ett tillgänglighetsperspektiv. Vad innebär design, och vad avgör om en viss design är bra eller dålig? Hur kan digital teknik användas som stöd i vardagen för personer med olika funktionsvariationer och behov, eller hjälpa var och en att bättre förstå andra personers vardag? Och vad innebär diskriminerande teknik och algoritmer?
		</p>

    <p>
      Innehållet fokuserar huvudsakligen på digital tillgänglighet för användare med olika typer av funktionsnedsättning. En funktionsnedsättning innebär att en person, i relation till samhällets normer, har <a href="https://www.1177.se/Stockholm/Fakta-och-rad/Sjukdomar/Funktionsnedsattning/" target="_blank">nedsatt förmåga att fungera fysiskt, psykiskt eller intellektuellt</a>. Nedsättningen kan vara i olika grad och påverka livet olika mycket, och vara medfödd eller uppkomma efter till exempel en sjukdom eller en olycka. En funktionnesättning kan vara fysisk, neuropsykiatrisk eller kognitiv, och kan vara tillfällig eller vara hela livet.
    </p>

    <info-fields class="infoFields">

			<div class="more">

				<div class="hBox">
					FÖRDJUPNING
				</div>

        <ul>
          <li>
            Läs mer om <a href="https://www.1177.se/Stockholm/Fakta-och-rad/Sjukdomar/Funktionsnedsattning/" target="_blank">funktionsnedsättningar på 1177</a>.
          </li>
          <li>
            Läs mer om <a href="https://www.funka.com/design-for-alla/tillganglighet/statistik/" target="_blank">statistik om funktionsnedsättningar på Funkas hemsida</a>.
          </li>
        </ul>

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
