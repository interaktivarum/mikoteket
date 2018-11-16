<template>
<div>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">

        <h4>Övningar</h4>

        <excercises-menu :excercises="excercises"></excercises-menu>

      </div>

      <div class="columnCenter">

        <excercise :excercise="excercise"></excercise>

        <!--excercise :excercise="track.data().excercises[]"></excercise-->

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
import ExcercisesMenu from './ExcercisesMenu.vue'
import Excercise from './Excercise.vue'
import ARoute from '@/components/ARoute.vue'
import MikNotions from '@/components/mik/MikNotions.vue'

//json
import notions from '@/assets/notions.json'
//  import data from '@/assets/tracks.json'

//Excercises
import Landing from './data/Landing.vue'
import SearchIntro from './data/SearchIntro.vue'
import SearchKeywords from './data/SearchKeywords.vue'

export default {
  name: 'TrackLayout',
  components: {
    ExcercisesMenu,
    Excercise,
    ARoute,
    MikNotions
  },
  data () {
    return {
      excercises: [
        SearchIntro,
        SearchKeywords
      ]
    }
  },
  props: {
  },
  computed: {
    excercise: function () {
      let route = this.$route.params["excercise"];
      if(route){
        return this.excercises.filter(excercise => excercise.data().route == route)[0];
      }
      return Landing;
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
