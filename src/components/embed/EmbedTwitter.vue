<template>
<div class="center">
  <blockquote class="twitter-tweet" data-lang="sv">
    <a :href="href">Inbäddad tweet</a>
  </blockquote>
</div>
</template>

<script>

export default {
  props: {
    href: {}
  },
  created () {
    var id = "twitterScriptEmbed"
    var injected = document.getElementById(id)
      if(injected == undefined){
      let scr = document.createElement('script')
      scr.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      scr.setAttribute('id', id)
      document.head.appendChild(scr)
    }
  },
  mounted () {
    /*let scr = document.createElement('script')
    scr.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    this.$el.appendChild(scr)*/
  }
}
</script>

<style scoped>

.center{
  display: flex;
  justify-content: center;
}

</style>
