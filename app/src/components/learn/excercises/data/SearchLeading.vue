<template>
  <div>

    <p>
      Precis som i verkligheten så har det betydelse hur du formulerar dina frågor när du söker på webben. Ledande frågor riskerar att ge ett alltför snävt urval av svar. Detta är ofta inte önskvärt, såvida du inte specifikt letar efter en särskild vinkling eller åsikt kring ett ämne.
    </p>
    <p>
      För att öka chanserna att erhålla nyanserade resultat så är en tumregel att undvika värdeladdade ord, såsom fel, fejk eller ett hot, i dina söktermer.
    </p>

    <info-fields class="infoFields">

			<div class="excercise">

				<div class="hBox">
          TESTA SJÄLV: SÖK MED NYCKELORD
				</div>

				<p>
          Använd sökfälten nedan för att söka med nyckelord. Testa gärna att ändra några av nyckelorden.
				</p>

				<search-component query="vad är klimatförändringarna?"></search-component>
        <search-component query="är klimatförändringarna fejk?"></search-component>

				<div class="hBox">
					DISKUTERA
				</div>

				<ul>
					<li>
            Hur påverkar värdeladdade ord sökresultatets urval av åsikter?
          </li>
          <li>
            Känner du igen källorna i respektive sökresultat? Tycker du att de är/verkar trovärdiga?
          </li>
          <li>
            Hur kan dina formuleringar påverka dig och dina åsikter?
          </li>
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
  name: 'SearchLeading',
  components: {
    InfoFields,
    SearchComponent,
  },
  data () {
    return {
      'name': 'Som du frågar får du svar',
      'route': 'ledandefragor'
    }
  }
}
</script>

<style>
</style>
