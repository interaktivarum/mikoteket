<template>
  <div>

    <h2>{{chapter.data().header}}</h2>

    <component :is="chapter" class="component"></component>

  </div>
</template>

<script>

export default {
  name: 'Chapter',
  data () {
    return {

    }
  },
  props: {
    chapter: {}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
