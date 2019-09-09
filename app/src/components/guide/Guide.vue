<template>
  <div>

    <cover-image header="Handledning"></cover-image>

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
            Samlad handledning framtagna av Mikoteket. Handledningarna är i förekommande fall framtagna i samverkan med andra aktörer och publicerade för fri användning under öppen licens.
          </p>

          <p>
            För frågor om användning eller samverkan, kontakta mig på <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>.
          </p>

          <h3>Digital källkritik</h3>

          <p>
            Ladda ner:
            <a-download href="https://www.dropbox.com/sh/psmnsw1b3u4sh2l/AAAHKbN2CxOfUsFCh9ZQTc5Ua?dl=0">Handledning och presentation på Dropbox</a-download>
            <br />
            Licens: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.sv" target="_blank">CC BY-NC-SA 4.0</a>
          </p>

          <p>
            Digital källkritik är ett skolprogram för årskurs 4-9 bestående av fyra lektionstillfällen á 60 minuter:

            <ol>
              <li>
                Algoritmer och källkritik
              </li>
              <li>
                Algoritmer i sökmotorer
              </li>
              <li>
                Vem säger det?
              </li>
              <li>
                Ekokammare och filterbubblor
              </li>
            </ol>

            Skolprogrammet och tillhörande handledning är framtaget för <a href="https://www.universeum.se/utstallningar/the-hub/" target="_blank">The Hub</a> på <a href="https://www.universeum.se/" target="_blank">Universeum</a>.
          </p>

          <!--h4>Tidigare versioner</h4>
          <ul>
            <li>
              <a href="http://handledning.mikoteket.se/nyteknik/Källkritik och algoritmer på internet, v0_1.pdf" target="_blank">v0.1</a>
            </li>
          </ul-->

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
import ADownload from '@/components/download/ADownload.vue'

export default {
  components: {
    CoverImage,
    OgEmbed,
    ADownload
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

.links{
  font-weight: 400;
}

</style>
