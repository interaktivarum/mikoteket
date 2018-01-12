<template>
  <div>

    <switch-component :query="query" :id="index" v-for="(query, index) in queriesArr" @stateChanged="onStateChanged"></switch-component>
    {{states}}

    {{allTrue}}

  </div>
</template>

<script>

import SwitchComponent from './SwitchComponent.vue'

export default {
  components: {
    SwitchComponent
  },
  data (){
    return {
      count: 0,
      lastState: false,
      states: []
    }
  },
  props: {
    queries: {}
  },
  computed: {
    queriesArr: function () {
      return JSON.parse(this.queries)
    },
    allTrue: function() {
      console.log(this.states)
      for(var i = 0; i < this.states.length; i++){
        if(this.states[i] == false){
          console.log(this.states[i])
          return false
        }
      }
      return true;
    }
  },
  mounted: function () {
    //console.log(this.$el.getElementsByTagName('input'));
    //console.log(this.$root.$children);
  },
  methods: {
    onStateChanged: function(id,state){
      this.states[id] = state;
      this.$forceUpdate();
    }
  }
}
</script>

<style scoped>

</style>
