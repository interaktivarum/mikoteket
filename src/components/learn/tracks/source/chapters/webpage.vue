<template>
  <div>

    <info-fields class="infoFields">
			<div class="excercise">

				<div class="hBox">
					TESTA SJÄLV: VEM ÄGER DOMÄNEN
				</div>

        <p>
          Undersök vem som äger följande domäner:
        </p>

        <ul>
          <li>
            svt.se (Sveriges Television)
          </li>
          <li>
            dn.se (Dagens Nyheter)
          </li>
          <li>
            samnytt.se (Samhällsnytt)
          </li>
          <li>
            storkensnyheter.se (Storkens Nyheter)
          </li>
        </ul>

        <p>
          Såhär gör du:
        </p>

        <ol>
          <li>
            Använd <a href="https://www.iis.se/domaner/free/" title="IIS: Whois" target="_blank">Internetstiftelsens whois-tjänst</a> för att söka efter svenska domäner.
          </li>
          <li>
            Klicka på Se innehavare
          </li>
          <li>
             Klicka på Se kontaktinformation
          </li>
        </ol>

      </div>
    </info-fields>

  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import SoiGraph from '@/components/SoiGraph.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    SoiGraph
  },
  data () {
    return {
      'header': 'Att granska en webbplats'
    }
  },
  created () {
  }
}
</script>

<style>
</style>
