<template>
  <div>

    <h3>Kapitel</h3>
    <ol>
      <li v-for="(chapter, index) in chapters">
        <router-link :to="'/digitalkompetens/'+routeTrack+'/'+(index+1)" :class="{active: index == idActive}">
          {{chapter.data().header}}
        </router-link>
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

li{
  margin-bottom: 5px;
}

</style>
