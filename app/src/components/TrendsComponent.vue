<template>
<div>

  <div id="trendsGraph" @click="generateGraph()">graf</div>

</div>
</template>

<script>

export default {
  props: {
  },
  methods:{
    generateGraph: function(el){
      el = this.$el.querySelector("#trendsGraph");
      trends.embed.renderExploreWidgetTo(el,"TIMESERIES", {"comparisonItem":[{"keyword":"fake news","geo":"SE","time":"today 5-y"}],"category":0,"property":""}, {"exploreQuery":"date=today%205-y&geo=SE&q=fake%20news","guestPath":"https://trends.google.se:443/trends/embed/"});
    }
  },
  created () {
  },
  mounted (){

    let scr = document.createElement('script')
    scr.setAttribute('src', 'https://ssl.gstatic.com/trends_nrtr/1294_RC01/embed_loader.js');
    this.$el.appendChild(scr);
    //document.head.appendChild(scr);

    this.generateGraph();
  }

}
</script>

<style scoped>

.graph{
  /*width: 100%;
  max-width: 100%;*/

}

</style>
