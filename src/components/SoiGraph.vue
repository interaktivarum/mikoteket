<template>
<div>
  <div :id="'graphtool'+graph" class="graph"></div>
</div>
</template>

<script>

export default {
  props: {
    graph: {}
  },
  created () {
    let scr = document.createElement('script')
    scr.setAttribute('src', 'https://www.iis.se/graphtool/ggs.php?id=' + this.graph + '&width=auto')
    document.head.appendChild(scr)
  }
}
</script>

<style scoped>

.graph{
  /*width: 100%;
  max-width: 100%;*/

}

</style>
