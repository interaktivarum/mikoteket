<template>
  <div>

    <footer>

      <div id="footer-flex">

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

      </div>

      <br />

      <div>
        <a href="https://www.metro.se/artikel/han-har-gjort-det-enklare-att-f%C3%B6rst%C3%A5-k%C3%A4llkritik-p%C3%A5-n%C3%A4tet-prisas-f%C3%B6r-sina-insatser" title="Metro: Han har gjort det enklare att förstå källkritik på nätet – prisas för sina insatser" target="_blank" class="nohover">
          <img src="/static/graphics/metro/gyllene_forstoringsglaset_2018_glass.png" width="100px" class="hue"/>
        </a>
        <p>
          <a href="https://www.metro.se/artikel/han-har-gjort-det-enklare-att-f%C3%B6rst%C3%A5-k%C3%A4llkritik-p%C3%A5-n%C3%A4tet-prisas-f%C3%B6r-sina-insatser" title="Metro: Han har gjort det enklare att förstå källkritik på nätet – prisas för sina insatser" target="_blank">
            Vinnare av Metro/IIS/Viralgranskarens källkritikpris
            <br />
            Gyllene Förstoringsglaset 2018.
          </a>
        </p>
        <p>

        </p>
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

  footer{
    background: #ff6600;
    color: lightgray;
    font-weight: 400;
    margin: 0px;
    padding: 40px;
    border-top: 2px solid #ff6600;
    border-bottom: 2px solid #ff6600;
    filter: grayscale(1) brightness(1);
    text-align: center;
  }

  #footer-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* horizontal centering */
    align-items: center; /* vertical centering */
    align-content: center;
    width: 100%;
  }

  footer:hover{
    filter: grayscale(0);
    color: #333;
    /*height: 6em;*/
  }

  #footer-flex > div{
    flex: 1 0 auto;
    margin: 10px 0px 10px 0px;
  }

  a{
    color: lightgray;
  }

  a:hover:not(.nohover){
    color: #ff6600 !important;
    background: white;
    /*height: 6em;*/
  }

  footer:hover a{
    color: white;
    /*height: 6em;*/
  }

  footer:hover img{
    background: none !important;
    /*height: 6em;*/
  }

  .hue{
    /*-webkit-animation: filter-animation 4s linear infinite;
    animation: filter-animation 4s linear infinite;*/
  }

  @-webkit-keyframes filter-animation {
    0% {
      -webkit-filter: hue-rotate(0deg);
    }

    100% {
      -webkit-filter: hue-rotate(360deg);
    }
  }

  @keyframes filter-animation {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }






</style>
