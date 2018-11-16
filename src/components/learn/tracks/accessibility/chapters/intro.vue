<template>
  <div>

    <p>
			Inledande beskrivning av spåret.
		</p>

    <info-fields class="infoFields">

			<div class="excercise">

				<div class="hBox">
					ÖVNING
				</div>

			</div>

			<div class="summary">

				<div class="hBox">
					SAMMANFATTNING
				</div>

			</div>

			<div class="more">

				<div class="hBox">
					FÖRDJUPNING
				</div>

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
