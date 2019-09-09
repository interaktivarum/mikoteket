<template>
  <div>

    <cover-image header="Resurser"></cover-image>

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

          <div>

            <h2>MIK-lådan</h2>

            <p>
              Länk:
              <a href="https://docs.google.com/spreadsheets/d/1KHRakVY6lDSZAFr3-HI9xBi_DBK5MZwahjI1oICKIbU/edit?usp=sharing" target="_blank">Crowdsourcad lista med MIK-resurser</a>
              <br />
              Licens: <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank">CC0</a>
            </p>

            <p>
              Ta del av andras MIK-resurser och dela med dig av dina bästa tips!
            </p>

          </div>

          <br />

          <div>
            <h2>Handledning: Digital källkritik</h2>

            <p>
              Ladda ner:
              <a-download href="https://www.dropbox.com/sh/psmnsw1b3u4sh2l/AAAHKbN2CxOfUsFCh9ZQTc5Ua?dl=0">Handledning och presentation på Dropbox</a-download>
              <br />
              Licens: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.sv" target="_blank">CC BY-NC-SA</a>
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
          </div>


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
