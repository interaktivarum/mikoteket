<template>
<div>

  <cover-image :header="track.data().header" :background="track.data().background" route="/digitalkompetens" route-name="Digital kompetens" :margin="true"></cover-image>

  <div class="margin"></div>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
        <chapters :route-track="routeTrack" :chapters="track.data().chapters" :idActive="idChapter"></chapters>
      </div>

      <div class="columnCenter">

        <chapter :chapter="track.data().chapters[idChapter]"></chapter>
        <!--component :is="track.data().chapters[idChapter]"></component-->

      </div>

      <div class="columnRight">

      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>
import Chapters from './Chapters.vue'
import Chapter from './Chapter.vue'
import CoverImage from '../CoverImage.vue'
//  import data from '@/assets/tracks.json'

export default {
  name: 'TrackLayout',
  components: {
    Chapters,
    Chapter,
    CoverImage
  },
  data () {
    return {
      //  'tracks': data,
      //  'track': data.data.chapters[this.id]
      //  'track': this.chaptersList
    }
  },
  props: {
    routeTrack: {},
    track: {}
  },
  computed: {
    idChapter: function () {
      if (this.$route.params['idChapter']) {
        if (this.$route.params['idChapter'] >= 0 && this.$route.params['idChapter'] < this.track.data().chapters.length) {
          return this.$route.params['idChapter']
        }
      }
      return 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.margin {
  margin-bottom: 20px;
}

</style>
