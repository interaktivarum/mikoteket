<template>
  <div>

    Digital teknik kan hjälpa personer att få en viss inblick i hur vissa nedsättningar eller funktionsvariationer kan upplevas.

    <h3>Simuleringar</h3>

    <h3>360-video</h3>

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
      'header': 'Inblick och förståelse'
    }
  }
}
</script>

<style>
</style>
