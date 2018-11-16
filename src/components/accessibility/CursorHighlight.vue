<template>
  <div>

    <transition name="fade">

      <div id="CursorHighlight" v-if="active">

        <div id="above" ref="above"></div>
        <div id="below" ref="below"></div>

      </div>
    </transition>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'CursorHighlight',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    above: function () {
      return this.$refs.above
    },
    below: function () {
      return this.$refs.below
    },
  },
  props: {
    active: false
  },
  watch: {
    active: function (newValue) {

      this.$nextTick(function() {
        if(newValue){
          this.updateHeightFromCursor();
          document.body.addEventListener('mousemove', this.updateHeight);
        }
        else{
          document.body.removeEventListener('mousemove', this.updateHeight);
        }
      })
    }
  },
  methods: {
    updateHeight: function (e){
      this.$refs.above.style.height = e.clientY - 20 + "px";
      this.$refs.below.style.height = window.innerHeight - e.clientY - 20 + "px";
    },
    updateHeightFromCursor: function (){
      this.$refs.above.style.height = 20 + "px";
      this.$refs.below.style.height = window.innerHeight - 20 + "px";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#CursorHighlight{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
}

#above{
  position: fixed;
  background: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  width: 100%;
}

#below{
  position: fixed;
  background: rgba(0,0,0,0.5);
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>
