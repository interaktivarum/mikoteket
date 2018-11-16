<template>
  <div>

    <p>
      En sökmotor försöker förstå vad det är du faktiskt letar efter. Deras algoritmer är bland annat tränade till att avgöra vilka ord i din sökning som är de viktiga, så kallade nyckelord.
    </p>

    <p>
      Ifall du endast söker på ett enda ord, t.ex. <i>fisk</i>, så har sökmotorn svårt att avgöra exakt vad du letar efter, medan en hel sökmening <i>kan jag äta fisk från Östersjön</i> hjälper sökmotorn att förstå vad du är ute efter.
    </p>

    <p>
      I följande sökterm är nyckelorden markerade med fet stil:
    </p>

    <p>
      <i>
        kan jag <strong>äta</strong> <strong>fisk</strong> från <strong>Östersjön</strong>
      </i>
    </p>



    <info-fields class="infoFields">

			<div class="excercise">

				<div class="hBox">
          TESTA SJÄLV: SÖK MED NYCKELORD
				</div>

				<p>
          Använd sökfälten nedan för att söka med nyckelord. Testa gärna att ändra några av nyckelorden.
				</p>

				<search-component query="kan jag äta fisk från östersjön"></search-component>
        <search-component query="kan jag fiska i östersjön"></search-component>
        <search-component query="äta fisk östersjön"></search-component>
        <search-component query="fiskar i östersjön"></search-component>

				<div class="hBox">
					DISKUTERA
				</div>

				<ul>
					<li>Vilka är nyckelorden i respektive sökning?</li>
					<li>Hur påverkar valet av nyckelord resultaten?</li>
				</ul>

			</div>

			<!--div class="summary">

				<div class="hBox">
					SAMMANFATTNING
				</div>

        Använd nyckelord för att göra dina sökningar mer noggranna.

			</div-->

			<!--div class="more">

				<div class="hBox">
					FÖRDJUPNING
				</div>

				Mikoteket: <router-link to="/digitalkompetens/sok/3">Sökteknik och sökkritik: Bli expert på att söka</router-link>
			</div-->

		</info-fields>

  </div>
</template>

<script>

import InfoFields from '@/components/learn/InfoFields.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'

export default {
  name: 'SearchKeywords',
  components: {
    InfoFields,
    SearchComponent,
  },
  data () {
    return {
      'name': 'Sök med nyckelord',
      'route': 'nyckelord'
    }
  }
}
</script>

<style>
</style>
