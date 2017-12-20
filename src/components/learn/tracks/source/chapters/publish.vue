<template>
  <div>

    <p>
      Idag har vem som helst stora möjligheter att skapa och publicera eget innehåll på webben. På <a-wiki c="sociala_medier">sociala medier</a-wiki> såsom 
    </p>

  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import SoiGraph from '@/components/SoiGraph.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    SoiGraph
  },
  data () {
    return {
      'header': 'Att skapa innehåll för webben'
    }
  },
  created () {
  }
}
</script>

<style>
</style>
