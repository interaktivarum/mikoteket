<template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'Dyslexia',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  props: {
    active: false
  },
  watch: {
    active: function (newValue) {
      if(newValue){
        document.body.classList.add('dyslexia');
      }
      else{
        document.body.classList.remove('dyslexia');
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@font-face {
    font-family: OpenDyslexic3;
    src: url(/static/fonts/OpenDyslexic3/OpenDyslexic3-Regular.ttf);
}

.dyslexia{
	font-family: "OpenDyslexic3";
}

</style>
