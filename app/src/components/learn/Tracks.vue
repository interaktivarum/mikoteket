<template>

  <div>

    <div v-if="!routes[$route.params['track']]">
      <track-landing :routes="routes"></track-landing>
    </div>
    <div v-if="routes[$route.params['track']]">
      <track-layout :route-track="$route.params['track']" :track="routes[$route.params['track']]"></track-layout>
    </div>

  </div>

</template>

<script>

import TrackLanding from './TracksLanding.vue'
import TrackLayout from './TrackLayout.vue'
import TrackSearch from './tracks/search/TrackSearch.vue'
import TrackSource from './tracks/source/TrackSource.vue'
import TrackAccessibility from './tracks/accessibility/TrackAccessibility.vue'

export default {
  name: 'Tracks',
  components: {
    TrackLanding,
    TrackLayout,
    TrackSearch,
    TrackSource,
    TrackAccessibility
  },
  data () {
    return {
      routes: {
        'sok': TrackSearch,
        'kallkritik': TrackSource,
        'tillganglighet': TrackAccessibility
      }
    }
  }
}
</script>
