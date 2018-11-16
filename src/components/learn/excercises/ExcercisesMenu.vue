<template>

  <div>

    <div v-for="excercise in excercises">

      <router-link :to="'/material/ovningar/' + excercise.data().route">
        {{excercise.data().name}}
      </router-link>

    </div>

  </div>

</template>

<script>

export default {
  name: 'ExcercisesMenu',
  components: {
  },
  data () {
    return {

    }
  },
  props: {
    excercises: {}
  }
}
</script>
