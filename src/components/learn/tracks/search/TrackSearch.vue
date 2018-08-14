<script>

import TrackSearchIntro from './chapters/intro.vue'
import TrackSearchEngines from './chapters/engines.vue'
import TrackSearchLearn from './chapters/learn.vue'
import TrackSearchResults from './chapters/results.vue'
import TrackSearchFootprints from './chapters/footprints.vue'
import TrackSearchAI from './chapters/ai.vue'
import TrackSearchOther from './chapters/other.vue'

export default {
  name: 'TrackSearch',
  components: {
  },
  data () {
    return {
      header: 'Sökteknik och sökkritik',
      background: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Internet_map_1024.jpg',
      chapters: [
        TrackSearchIntro,
        TrackSearchEngines,
        TrackSearchLearn,
        TrackSearchResults,
        TrackSearchFootprints,
        TrackSearchAI,
        TrackSearchOther
      ],
      notions: [1,4,5,6,11],
      sponsor: {
        name: "Stockholms Stadsbibliotek",
        url: "https://biblioteket.stockholm.se/",
        image: "http://resources.mynewsdesk.com/image/upload/t_open_graph_image/fyy161rnegf4jrboahyh.jpg"
      }
    }
  }
}
</script>
