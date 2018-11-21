<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'BackgroundContrast',
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
      /*if(newValue){
        //document.body.classList.add('bg-contrast');
        document.getElementsByClassName("mainContent")[0].classList.add('bg-contrast');
      }
      else{
        //document.body.classList.remove('bg-contrast');
        document.getElementsByClassName("mainContent")[0].classList.remove('bg-contrast');
      }*/
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.bg-contrast{
	background: rgb(100,100,100);
  color: rgb(230,230,230);
}

.bg-contrast h1, .bg-contrast h2, .bg-contrast h3 {
  color: rgb(230,230,230);
}

.bg-contrast a {
  color: rgb(230,230,230);
  text-decoration: underline;
}

</style>
