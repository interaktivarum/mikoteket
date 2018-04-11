<template>
  <div>

    <cover-image header="Press & media"></cover-image>

    <div class="container">

      <div class="containerInner">

        <div class="columnLeft">
          <h3>Kontakt</h3>
          <p>
            Martin Törnros
            <br/>
            <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
            <br/>
            0702-800054
          </p>
        </div>

        <div class="columnCenter">

          <p>
            Här samlas och presenteras artiklar och intervjuer från press och media, kring Mikoteket och Ekokammaren.
          </p>

          <p>
            Har du läst om Mikoteket eller Ekokammaren, skicka gärna ett länktips till: <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
          </p>

          <p>
            Vill du skriva eller intervjua mig om digital källkritik eller något av de projekt jag utvecklar? Kontakta mig på: <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a> eller 0702-800054.
          </p>

          <og-embed url="https://digitalsamtal.se/122-om-digital-kallkritik-med-martin-tornros/"></og-embed>

          <br /><br />

          <og-embed url="http://sverigesradio.se/sida/artikel.aspx?programid=2689&artikel=6900408"></og-embed>

          <br /><br />

          <iframe width="100%" height="150" src="https://sverigesradio.se/embed/publication/6900408" frameborder="0"></iframe>

          <br /><br />

          <og-embed url="https://www.metro.se/artikel/han-har-gjort-det-enklare-att-f%C3%B6rst%C3%A5-k%C3%A4llkritik-p%C3%A5-n%C3%A4tet-prisas-f%C3%B6r-sina-insatser"></og-embed>

          <br /><br />

          <og-embed url="https://www.voister.se/artikel/2018/02/ekokammarense-for-kallkritik-i-klassrummet/"></og-embed>

          <br /><br />

          <og-embed url="https://www.medievarlden.se/2017/02/ekokammaren-ett-synliggorande-av-filterbubblor/"></og-embed>

          <h1>Tips och notiser</h1>

          <og-embed url="https://medium.com/digidelat/k%C3%A4ll-och-s%C3%B6kkritisk-verktygsl%C3%A5da-b8092b0c280c" date="2017-02-08"></og-embed>

          <br /><br />

          <og-embed url="http://buzzter.se/spaning/verktyg-att-spracka-filterbubblor/"></og-embed>

          <br /><br />

          <og-embed url="http://pedagog.trelleborg.se/?p=2155"></og-embed>

          <br /><br />

          <og-embed url="https://mediapoolen.se/5-sidor-om-kallkritik-att-ha-koll-pa/" date="2017-11-23"></og-embed>

          <br /><br />

          <og-embed url="https://vastrahamnensmediatek.wordpress.com/2018/03/06/ekokammare-se/"></og-embed>

          <br /><br />

          <!--og-embed url="https://www.uddevalla.se/utbildning-och-barnomsorg/grundskola/skolutveckling/pedagog-uddevalla/skolutveckling-grundskola/2017-12-20-lucka-20-ekokammare-och-filterbubblor.html"></og-embed-->

          <og-embed url="https://www.lararforbundet.se/bloggar/digi-bloggen/tre-tips-for-kallkritisk-undervisning"></og-embed>

          <br /><br />

          <og-embed url="http://www.nackagymnasium.info/skolbibliotek/granska-kallor/medie-och-informationskunnighet/"></og-embed>



        </div>

        <div class="columnRight">
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import CoverImage from '@/components/CoverImage.vue'
import OgEmbed from '@/components/OgEmbed.vue'

export default {
  components: {
    CoverImage,
    OgEmbed
  },
  props: {
    header: {},
    background: {},
    //collapsed: {default: false},
    route: {},
    routeName: {}
  }
}
</script>

<style scoped>

</style>
