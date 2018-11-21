<template>
<div>

  <cover-image :header="track.data().header" :background="track.data().background" route="/digitalkompetens" route-name="Digital kompetens" :margin="true"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">

        <div class="stickyTop">

          <h3>{{track.data().header}}</h3>

          <chapters :route-track="routeTrack" :chapters="track.data().chapters" :idActive="idChapter" class=""></chapters>

          <br />

          <span class="gray">Utvecklat i samverkan med</span>
          <br />
          <a :href="track.data().sponsor.url" :title="track.data().sponsor.name" target="_blank">
            {{track.data().sponsor.name}}
          </a>
        </div>

        <br />

        <div v-if="$route.query.sponsor">

          <h4>Sponsrat av:</h4>
          <a :href="track.data().sponsor.url" :title="track.data().sponsor.name" target="_blank" class="nohover">
            <img :src="track.data().sponsor.image" class="sponsor"/>
          </a>

        </div>



      </div>

      <div class="columnCenter">

        <mik-notions :notions="track.data().notions"></mik-notions>
        <br />
        <hr />

        <chapter :chapter="track.data().chapters[idChapter]"></chapter>
        <!--component :is="track.data().chapters[idChapter]"></component-->

        <div class="chapterButtons">
          <div>
            <router-link :to="'/digitalkompetens/'+routeTrack+'/'+(idChapter)" class="button" v-if="idChapter>0">Föregående</router-link>
          </div>
          <div class="alignRight">
            <router-link :to="'/digitalkompetens/'+routeTrack+'/'+(idChapter+2)" class="button" v-if="idChapter<track.data().chapters.length-1">Nästa</router-link>
          </div>
        </div>

      </div>

      <div class="columnRight">
        <!--p class="small">
          <strong>Vill du surfa privat?</strong>
          <br />
          Öppna ett privat/inkognitofönster i din webbläsare.
        </p-->
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
import ARoute from '@/components/ARoute.vue'
import MikNotions from '@/components/mik/MikNotions.vue'

//json
import notions from '@/assets/notions.json'
//  import data from '@/assets/tracks.json'

export default {
  name: 'TrackLayout',
  components: {
    Chapters,
    Chapter,
    CoverImage,
    ARoute,
    MikNotions
  },
  data () {
    return {
      notions: notions
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
        if (this.$route.params['idChapter'] >= 1 && this.$route.params['idChapter'] <= this.track.data().chapters.length) {
          return this.$route.params['idChapter'] - 1
        }
      }
      return 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chapter {
  margin-top: 20px;
}

.margin {
  margin-bottom: 20px;
}

.sponsor{
  max-width: 200px;
}

.chapterButtons{
  display: flex;
}

.chapterButtons > div{
  flex: 1 0 auto;
}

.chapterButtons > div{
  flex: 1 0 auto;
}

</style>
