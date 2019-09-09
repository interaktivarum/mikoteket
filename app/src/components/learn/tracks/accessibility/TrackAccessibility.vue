<script>

import TrackAccessibilityIntro from './chapters/intro.vue'
import Design from './chapters/design.vue'
import Understanding from './chapters/understanding.vue'
import Utilities from './chapters/utilities.vue'

export default {
  name: 'TrackAccessibility',
  components: {
  },
  data () {
    return {
      header: 'Digital tillgänglighet',
      background: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Internet_map_1024.jpg',
      chapters: [
        TrackAccessibilityIntro,
        Design,
        Utilities,
        Understanding,
      ],
      notions: [1,4,5,6,7],
      sponsor: {
        name: "Länsbibliotek Sörmland",
        url: "https://regionsormland.se/kultur/biblioteksutveckling/"
      }
    }
  },
  disabled: false
}
</script>
