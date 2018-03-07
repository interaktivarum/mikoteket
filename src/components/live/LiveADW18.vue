<template>
<div>

  <cover-image header="ALL DIGITAL Week 2018"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">

        <h3>Kontakt och anmälan</h3>
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
          Under <a href="http://digidel.se/all-digital-week/" title="ALL DIGITAL Week" target="_blank">ALL DIGITAL Week</a> erbjuder Mikoteket onlineföreläsningar vid fyra tillfällen, riktat mot bibliotek, skola och institut. Under en timme går jag igenom ett av Mikotekets spår och några av dess övningar, för att enkelt komma igång med fortsatt egen användning. Mot slutet kommer det att finnas utrymme för frågor och kortare diskussioner.
        </p>

        <h3>Datum och tider</h3>

        <p>
          Nedan listas tiderna för onlineföreläsningar under ALL DIGITAL Week. Varje spår ges vid två tillfällen, med ett förmiddags- och ett eftermiddagspass.
        </p>

        <strong>Sökteknik och sökkritik</strong>
        <ul>
          <li>
            Tisdag 20/3, 10.00-11.00
          </li>
          <li>
            Tisdag 20/3, 14.00-15.00
          </li>
        </ul>

        <strong>Digital källkritik</strong>
        <ul>
          <li>
            Fredag 23/3, 10.00-11.00
          </li>
          <li>
            Fredag 23/3, 14.00-15.00
          </li>
        </ul>

        <h3>Hur funkar det?</h3>

        <p>
          Föreläsningarna kommer att ske över videolänk med konferensverktyget <a href="https://meet.jit.si/" title="Jitsi Meet" target="_blank">Jitsi</a>. Jag kommer att dela min egen skärm och ljud, och gå igenom utvalda delar av Mikoteket, som ni kan följa på er egen dator.
        </p>

        <p>
          Efter bekräftad anmälan kommer ni att erhålla en Jitsi-länk, för enkel inloggning till vald föreläsning.
        </p>

        <p>
          Ni behöver:
        </p>
        <ul>
          <li>
            <span class="semibold">En dator med internetuppkoppling</span>.
          </li>
          <li>
            <span class="semibold">En skärm eller projektor</span> så att alla era deltagare kan se.
          </li>
          <li>
            <span class="semibold">Ljud</span> så att alla era deltagare kan höra.
          </li>
          <li>
            Frivilligt:
            <ul>
              <li>
                <span class="semibold">Mikrofon</span> ifall ni vill kunna ställa frågor.
              </li>
              <li>
                <span class="semibold">Webbkamera</span> ifall ni vill att jag och andra deltagare ska kunna se er.
              </li>
            </ul>
          </li>

        </ul>

        <p>
          <span class="semibold">Kom ihåg:</span> testa er egen teknik i god tid innan föreläsningen.
        </p>

        <p>
          Det går bra att vara fler deltagare per uppkoppling, som delar samma fysiska plats. Det är med andra ord ok att  koppla upp personalrummet tillsammans med kollegor, eller att ha en uppkoppling i biblioteket eller klassrummet.
        </p>

        <p>
          Föreläsningen är inte privat, ni kommer med andra ord att delta tillsammans med andra anmälda. Det är ej tillåtet att sprida den erhållna videolänken vidare till ej anmälda deltagare.
        </p>

        <h3>Kostnad</h3>

        <ul>
          <li>
            En föreläsning: 3000:-
          </li>
          <li>
            Två föreläsningar: 5000:-
          </li>
        </ul>

        <p>
          Samtliga kostnader är exklusive moms och per uppkopplad dator. Det går bra att vara fler deltagare per uppkoppling, se ovan för mer information.
        </p>

        <p>
          Önskas fler uppkopplingar inom samma byggnad eller enhet ges rabatt efter överenskommelse.
        </p>

        <h3>Kontakt och anmälan</h3>

        <p>
          All anmälan sker av behörig person (som äger rätt att lägga beställning och mottaga faktura för deltagande) genom att kontakta mig enligt nedan. Ange vid vilket/vilka tillfällen du önskar delta.
        </p>

        <p>
          <span class="semibold">Martin Törnros</span>
          <br/>
          <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
          <br/>
          0702-800054
        </p>

        <p>
          (under v11 12-16/3 når jag lättast på mail - ej telefon)
        </p>

      </div>

      <div class="columnRight">
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import ARoute from '@/components/ARoute.vue'
import AWiki from '@/components/AWiki.vue'
import CoverImage from '../CoverImage.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import Quote from '@/components/quote.vue'

export default {
  components: {
    ARoute,
    AWiki,
    CoverImage,
    InfoFields,
    MediaContainer,
    Quote
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
  }
}
</script>

<style>
</style>
