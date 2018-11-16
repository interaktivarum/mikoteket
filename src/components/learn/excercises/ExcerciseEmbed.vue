<template>
  <div class="component">

    <h3>
      {{excercise.data().name}}
    </h3>

    <a @click="toggleShow">{{clickword}} uppgift</a> eller

    <a :href="'/material/ovningar/'+excercise.data().route" target="_blank">öppna i nytt fönster</a>

    <component v-if="showfull != false" :is="excercise" class="description"></component>

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
    'showfull': { type: Boolean, default: false}
  },
  computed: {
    href: function () {
      return this.$route.href;
    },
    clickword: function () {
      return this.showfull ? "Stäng" : "Visa";
    }
  },
  methods: {
    toggleShow: function () {
      this.showfull = !this.showfull;
    }
  },
  mounted: function () {
    console.log(this.$route);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .description{
      background: rgb(245,245,245);
      padding: 0px;
      border-left: 0px solid lightgray;
      border-radius: 0px;
      font-size: smaller;
  }

</style>
