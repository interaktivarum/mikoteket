<template>
  <div>

    <p>
			Vi använder sökmotorer för att hitta innehåll på internet. Du skriver själv in en söktext och presenteras med en lista av sökresultat. Listan består bland annat av länkar till andra webbplatser.
		</p>

    <p>
      För att ge så bra resultat som möjligt tar sökmotorn hänsyn till var du befinner dig och vilket språk du använder i din webbläsare. Sökresultaten beror även på vad du och andra personer har sökt på tidigare.
    </p>

    <p>
      Sökresultaten kan därför se något olika ut beroende på vilken dator du använder eller om du jämför med dina vänner, även om ni gör exakt samma sökning.
    </p>

    <info-fields class="infoFields">

			<div class="excercise">

				<div class="hBox">
					TESTA SJÄLV: EN ENKEL SÖKNING PÅ FISK
				</div>

				<p>
					Använd sökfältet nedan för att söka på <i>fisk</i> med olika sökmotorer.
				</p>

				<search-component query="fisk"></search-component>

				<div class="hBox">
					DISKUTERA
				</div>

				<ul>
					<li>Handlar resultaten om biologi, mat eller annat?</li>
					<li>Hur är resultaten personligt anpassade till dig?</li>
					<li>Får du samma resultat som dina vänner?</li>
				</ul>

			</div>

			<!--div class="summary">

				<div class="hBox">
					SAMMANFATTNING
				</div>

				Vi använder sökmotorer för att hitta innehåll på internet. Sökresultaten är personligt anpassade och kan vara annorlunda mot dina vänners resultat.

			</div-->

			<!--div class="more">

				<div class="hBox">
					FÖRDJUPNING
				</div>

				Mikoteket: <router-link to="/digitalkompetens/sok/2">Sökmotorer på internet: så funkar det!</router-link>
			</div-->

		</info-fields>

  </div>
</template>

<script>

import InfoFields from '@/components/learn/InfoFields.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'

export default {
  name: 'SearchIntro',
  components: {
    InfoFields,
    SearchComponent,
  },
  data () {
    return {
      'name': 'Introduktion till sökmotorer',
      'route': 'sokmotorer'
    }
  }
}
</script>

<style>
</style>
