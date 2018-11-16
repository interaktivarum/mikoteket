<template>
  <div>

  <media-container class="mediaContainer">
    <div>
      <div class="content">
        <iframe src="https://www.youtube.com/embed/WHynGQ9Vg30" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div class="caption">
        Den automatiska tvålmataren reagerar inte på mörka hudtoner, och fungerar endast för personer för ljus hy.
      </div>
      <div class="source">
        Källa: <a href="https://www.youtube.com/watch?v=WHynGQ9Vg30" title="Youtube: Whites Only?" target="_blank">Teej Meister (Youtube)</a>
      </div>
    </div>
  </media-container>

  <media-container class="mediaContainer">
    <div>
      <div class="content">
        <embed-twitter href="https://twitter.com/jackyalcine/status/615329515909156865"></embed-twitter>
      </div>
      <div class="caption">
        Google Photos AI har tilldelat två personer etiketten <i>Gorillas</i>.
      </div>
      <div class="source">
        Källa: <a href="https://twitter.com/jackyalcine/status/615329515909156865" title="@jackyalcine (Twitter)" target="_blank">@jackyalcine (Twitter)</a>
      </div>
    </div>
  </media-container>

  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'
import SoiGraph from '@/components/SoiGraph.vue'
import SlideComponent from '@/components/learn/SlideComponent.vue'
import EmbedTwitter from '@/components/embed/EmbedTwitter.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    MediaContainer,
    SearchComponent,
    SoiGraph,
    SlideComponent,
    EmbedTwitter
  },
  data () {
    return {
      'header': 'Diskriminerande design och AI',
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
