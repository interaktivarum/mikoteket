<template>
  <div>

    <h1 v-if="!sub">
      {{excercise.data().name}}
    </h1>

    <h2 v-if="sub">
      {{excercise.data().name}}
    </h2>

    <component :is="excercise" class="component"></component>

  </div>
</template>

<script>

export default {
  name: 'Excercise',
  data () {
    return {

    }
  },
  props: {
    excercise: {},
    'sub': { type: Boolean, default: false}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
