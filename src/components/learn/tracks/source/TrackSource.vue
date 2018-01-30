<script>

import TrackSourceIntro from './chapters/intro.vue'
import TrackSourceCriticism from './chapters/sourcecriticism.vue'
import TrackOnline from './chapters/online.vue'
import TrackSourcePublish from './chapters/publish.vue'
import TrackSourceViral from './chapters/viral.vue'
import TrackSourceFake from './chapters/fake.vue'
import TrackSourcePersonilized from './chapters/personalized.vue'

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
        TrackOnline,
        TrackSourcePublish,
        TrackSourceViral,
        TrackSourceFake,
        //TrackSourcePersonilized,
        TrackSourceWebpage,
        TrackSourceTools
      ],
      sponsor: {
        name: "Stockholms Stadsbibliotek",
        url: "https://biblioteket.stockholm.se/",
        image: "http://resources.mynewsdesk.com/image/upload/t_open_graph_image/fyy161rnegf4jrboahyh.jpg"
      }
    }
  }
}
</script>
