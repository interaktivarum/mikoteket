<template>
  <div>

    <h3>Kapitel</h3>
    <ol>
      <li v-for="(chapter, index) in chapters">
        <a :href="'/digitalkompetens/'+routeTrack+'/'+(index+1)" :class="{active: index == idActive}">{{chapter.data().header}}</a>
      </li>
    </ol>

  </div>
</template>

<script>

export default {
  name: 'Chapters',
  data () {
    return {

    }
  },
  props: {
    routeTrack: {},
    chapters: {},
    idActive: {}
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul, ol{
	
}

</style>
