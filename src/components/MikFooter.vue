<template>
  <div>

    <footer>

      <div>
        Vad är Mikoteket?
        <br />
        <a href="/om">Om Mikoteket</a>
      </div>

      <!--div>
          Koncept, design & utveckling:
          <br/>
          <a href="http://www.interaktivarum.se" title="Interaktiva rum" target="_blank">Interaktiva rum</a>
      </div-->

      <div>
        Kontakt:
        <br />
        <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
      </div>

      <div>
        <a href="https://www.facebook.com/mikoteket" title="Facebook: Mikoteket" target="_blank">Mikoteket på Facebook</a>
        <br />
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikoteket%2F&width=96&layout=button&action=like&size=small&show_faces=false&share=true&height=65&appId=1595080274133613" width="96" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
      </div>

    </footer>

  </div>
</template>

<script>

import ARoute from '@/components/ARoute.vue'

export default {
  components: {
    ARoute
  },
  props: {
    quote: {}
  },
  methods: {
  }
}
</script>

<style scoped>

  footer {
    display: flex;
    background: #ff6600;
    color: lightgray;
    font-weight: 400;
    margin: 0px;
    padding: 40px;
    border-top: 2px solid #ff6600;
    border-bottom: 2px solid #ff6600;
    /*min-height: 40px;*/
    filter: grayscale(1) brightness(1);
    flex-wrap: wrap;

    justify-content: center; /* horizontal centering */
    align-items: center; /* vertical centering */
    align-content: center;

  }

  footer:hover{
    filter: grayscale(0);
    color: #333;
    /*height: 6em;*/
  }

  footer > div{
    flex: 1 0 auto;
    text-align: center;
    margin: 10px 0px 10px 0px;
  }

  a{
    color: lightgray;
  }

  a:hover{
    color: #ff6600 !important;
    background: white;
    /*height: 6em;*/
  }

  footer:hover a{
    color: white;
    /*height: 6em;*/
  }




</style>
