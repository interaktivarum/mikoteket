<template>
<div>

  Ladda ner fil

</div>
</template>

<script>

export default {
  props: {
    href: ""
  },
  created: function () {
    let href = this.$route.query["href"];
    /*console.log(href)
    console.log(encodeURI(href))
    console.log(unescape(href));
    console.log(unescape(encodeURI(href)));
    console.log(unescape(decodeURIComponent(href)))*/
    window.open(href, '_blank')
  },
  mounted: function () {
    window.close();
  }
}
</script>
