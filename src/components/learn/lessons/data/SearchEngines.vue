<template>
  <div>

    <p>
      <a-wiki c="Internet">Internet</a-wiki> är världens största nätverk av sammankopplade datorer som tillsammans innehåller en otrolig mängd data. Det innebär fantastiska möjligheter att hitta information om i stort sett vad som helst.
		</p>

		<p>
			Problemet är just att vi har ett <i>överflöd</i> av information som är omöjligt att överblicka och navigera i manuellt, och vi har därför behov av filter och <a href="https://sv.wikipedia.org/wiki/Algoritm" title="Wikipedia: Algoritm" target="_blank">algoritmer</a> som hanterar informationsflödet åt oss. I grund och botten är de allra flesta sådana algoritmer designade för att ge dig som användare en så smidig och trevlig upplevelse som möjligt, och är anpassade för att ge personliga resultat. Ett exempel på tjänster som använder sådana algoritmer är <a href="https://sv.wikipedia.org/wiki/S%C3%B6ktj%C3%A4nst" title="Wikipedia: Söktjänst" target="_blank">sökmotorer</a> som ger resultat baserat på din geografiska position, din och andra användares internethistorik och andra personliga parametrar.
		</p>

  </div>
</template>

<script>

import Vue from 'vue'
import { store } from '@/store';
import AWiki from '@/components/AWiki.vue'

//Exercises

export default {
  name: 'SearchEngines',
  components: {
    AWiki
  },
  data () {
    return {
      'name': 'Sökmotorer',
      'route': 'sokmotorer',
      excercises: [
        store.getters.getExerciseByName("SearchIntro"),
        store.getters.getExerciseByName("SearchKeywords"),
        store.getters.getExerciseByName("SearchLeading"),
      ]
    }
  }
}
</script>

<style>
</style>
