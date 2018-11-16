<template>
  <div>

    <footer>

      <div id="footer-flex">

        <div>
        </div>

        <div>
          Vad är Mikoteket?
          <br />
          <router-link :to="{name: 'About'}">Om Mikoteket</router-link>
          <br />
          <router-link :to="{name: 'Press'}">Press & Media</router-link>
        </div>

        <div>
          Kontakt:
          <br />
          <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
          <br /><br />
          <a href="https://www.facebook.com/mikoteket" title="Facebook: Mikoteket" target="_blank">Mikoteket på Facebook</a>
          <br />
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fmikoteket&width=240&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId=1595080274133613" width="240" height="80" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>

        <div>
          Anpassa webbplatsen
          <br />
          <router-link :to="{name: 'Accessibility'}">Inställningar för tillgänglighet</router-link>
        </div>

        <div>
        </div>

      </div>

      <hr />

      <div class="award">
        <p>
          <a href="https://www.metro.se/artikel/han-har-gjort-det-enklare-att-f%C3%B6rst%C3%A5-k%C3%A4llkritik-p%C3%A5-n%C3%A4tet-prisas-f%C3%B6r-sina-insatser" title="Metro: Han har gjort det enklare att förstå källkritik på nätet – prisas för sina insatser" target="_blank">
            Vinnare av Metro/IIS/Viralgranskarens källkritikpris
            <br />
            Gyllene Förstoringsglaset 2018.
          </a>
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
    color: black;
    font-weight: 400;
    margin: 0px;
    padding: 40px;
    border-top: 2px solid #ff6600;
    border-bottom: 2px solid #ff6600;
    filter: grayscale(1) brightness(1);
  }

  #footer-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* horizontal centering */
    align-items: flex-start; /* vertical centering */
    align-content: center;
    width: 100%;
  }

  footer:hover{
    filter: grayscale(0);
    color: #333;
    /*height: 6em;*/
  }

  #footer-flex > div{
    flex: 1;
    margin: 0px;
  }

  @media screen and (max-width: 600px) {

    #footer-flex {
      flex-direction: column;
    }

    #footer-flex > div{
      margin-bottom: 20px;
    }

  }

  .award{
    text-align: center;
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
