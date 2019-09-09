<template>
<div class="Download">

  <div v-if="!showUrl">
    Arbetar, vänligen vänta.
  </div>

  <div v-if="showUrl">
    Om filen eller sidan inte laddas, klicka på följande länk: <a :href="href">{{href}}</a>
  </div>

</div>
</template>

<script>

export default {
  data: function () {
    return {
      href: "",
      showUrl: false
    }
  },
  created: function () {
    this.href = this.$route.query["href"];
    window.open(this.href,"_self")
  },
  methods: {
    showUrlFunc: function (){
      this.showUrl = true;
    }
  },
  mounted: function () {
    //window.close();
    setTimeout(this.showUrlFunc, 3000);
  }
}
</script>

<style scoped>

.Download{
  margin: 50px;
}

</style>
