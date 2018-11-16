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
  methods: {
    loadAPI: function () {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'twitter-jssdk'));
    },
    reloadAPI: function () {
      (function(d, id) {
        if (d.getElementById(id)){
          d.getElementById(id).remove();
        };
      }(document, 'twitter-jssdk'));
      this.loadAPI();
    }
  },
  created () {
    /*var id = "twitterScriptEmbed"
    var injected = document.getElementById(id)
      if(injected == undefined){
      let scr = document.createElement('script')
      scr.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      scr.setAttribute('id', id)
      document.head.appendChild(scr)
    }*/
  },
  mounted () {
    /*let scr = document.createElement('script')
    scr.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    this.$el.appendChild(scr)*/
    this.reloadAPI();
  }
}
</script>

<style scoped>

.center{
  display: flex;
  justify-content: center;
}

</style>
