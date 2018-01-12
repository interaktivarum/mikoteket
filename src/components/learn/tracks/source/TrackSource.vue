<script>

import TrackSourceIntro from './chapters/intro.vue'
import TrackSourcePublish from './chapters/publish.vue'
import TrackSourceViral from './chapters/viral.vue'
import TrackSourcePersonilized from './chapters/personalized.vue'
import TrackSourceCriticism from './chapters/sourcecriticism.vue'
import TrackSourceWebpage from './chapters/webpage.vue'
import TrackSourceTools from './chapters/tools.vue'

export default {
  data () {
    return {
      header: 'Digital källkritik (under uppbyggnad)',
      background: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Al_Jazeera_English_Doha_Newsroom_1.jpg',
      chapters: [
        TrackSourceIntro,
        TrackSourceCriticism,
        TrackSourcePublish,
        TrackSourceViral,
        //TrackSourcePersonilized,
        TrackSourceWebpage,
        TrackSourceTools
      ]
    }
  }
}
</script>
