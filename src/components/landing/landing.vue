<template>
<div>

  <cover-image header="Mikoteket"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">

        <div class="hideOnPhone">

          <h3>Kommande evenemang</h3>

          <!--p>
            <span class="semibold">Onlineföreläsning</span>
            <br />
            2018-03-07
            <br />
            Värmdö bibliotek
          </p-->

          <p>
            <span class="semibold">Onlineföreläsning x2</span>
            <br />
            2018-03-20
            <br />
            <a-route href="/live/adw18">Info & anmälan</a-route>
          </p>

          <p>
            <span class="semibold">Onlineföreläsning x2</span>
            <br />
            2018-03-23
            <br />
            <a-route href="/live/adw18">Info & anmälan</a-route>
          </p>

          <p>
            <span class="semibold">Regionbibliotek Östergötland</span>
            <br />
            2018-03-28
          </p>

          <p>
            <span class="semibold">Lärvux Stockholm</span>
            <br />
            2018-04-18
          </p>

          <!--p>
            <a href="http://regionbibliotekostergotland.se/events/mikdag-2018/" title="MIK-dag 2018" target="_blank">MIK-dag 2018</a>
            <br />
            2018-02-27
            <br />
            Regionbibliotek Östergötland
          </p-->

          <p>
            <a-route href="/workshop" class="button">Boka workshop</a-route>
          </p>

        </div>

      </div>

      <div class="columnCenter">

        <p>
          Mikoteket erbjuder arbetsmaterial i olika spår inom <a-wiki c="Medie-_och_informationskunnighet">medie- och informationskunnighet</a-wiki> (MIK) och <a-wiki c="Digital_kompetens">digital kompetens</a-wiki>. Varje spår innehåller flera kapitel i vilka text och länkar varvas med bilder, videor och praktiska övningar som introducerar - och låter användaren prova - olika digitala verktyg.
        </p>

        <p>
          Materialet är fritt att använda i icke-kommersiell utbildning och intern kompetensutveckling.
        </p>

        <p>
          <a-route href="/digitalkompetens" class="button">Läs mer och ta del av arbetsmaterialet</a-route>
        </p>

        <h3>Varför Mikoteket?</h3>

        <p>
          Det finns mycket användbart och kostnadsfritt material kring digital källkritik och andra MIK-områden, exempelvis från <a href="https://statensmedierad.se/larommedier.365.html" title="Statens medieråd" target="_blank">Statens medieråd</a>, <a href="https://www.iis.se/fakta/#typ=internetguider" title="Internetstiftelsen i Sverige" target="_blank">Internetstiftelsen i Sverige</a> och <a href="https://www.skolverket.se/skolutveckling/resurser-for-larande/kollakallan" title="Skolverket" target="_">Skolverket</a>. Dessa erbjuder bra introducerande texter och förslag på klassrumsövningar att genomföra vid tillfälle, och ofta uppmuntras pedagogen att fritt forma sitt eget lektionsupplägg utifrån materialet.
        </p>

        <p>
          I Mikoteket varvas pedagogiska textavsnitt med konkreta uppgifter och diskussionsfrågor, direkt inbyggda i arbetsmaterialet. De regelbundna övningarna gör det enkelt att praktiskt relatera till innehållet, vilket även främjar nyfikna tankar och diskussion.
        </p>

        <quote quote="Vi har fått insikt i hur sökmotorer kan bekräfta fördomar om man använder värdeladdade ord, och att man måste ställa sig kritisk till de träffar man får." by="Personal vid Skärholmens bibliotek" description="Utvärdering efter workshop i sökteknik och sökkritik"></quote>

        <p>
          Mikoteket nöjer sig inte med att konstatera att "internet är fullt av <a-wiki c="Internettroll">troll</a-wiki> och falsk information", utan låter dig som användare själv besöka och ta del av internets mörka vrår, självklart utrustad med en kritisk blick. Som ett steg i detta lär du dig inte enbart att Googla smart, utan även att Googla riktigt dåligt.
        </p>

        <info-fields class="infoFields">
    			<div class="excercise">

    				<div class="hBox">
    					TESTA SJÄLV: BRA OCH DÅLIG SÖKNING
    				</div>

            <p>
    					Använd sökfälten nedan för att genomföra en bra samt en dålig sökning på webben.
    				</p>

            <search-component query="klimatförändringar"></search-component>
    				<search-component query="är klimatförändringarna fejk?"></search-component>

    				<div class="hBox">
    					DISKUTERA
    				</div>

    				<ul>
              <li>Vilka typer av sökresultat får du av respektive sökning?</li>
              <li>Varför är den första söktermen bättre än den andra?</li>
              <li>Hur kan dina sökformuleringar påverka dig och dina åsikter?</li>
    				</ul>

    			</div>

    		</info-fields>

        <!--media-container class="mediaContainer">
      		<div>
            <div class="content">
        		    <iframe width="500" height="440" frameborder="0" src="http://ncase.me/loopy/v1.1/?embed=1&data=[[[3,423,356,0,%22Intolerans%22,0],[4,595,224,0,%22Vinklade%2520fr%25C3%25A5gor%22,5],[5,768,363,0,%22Vinklade%2520svar%22,5],[6,603,494,0,%22F%25C3%25B6rdomar%22,5]],[[3,4,53,1,0],[4,5,62,1,0],[5,6,44,1,0],[6,3,60,1,0]],[[594,372,%22Vinklade%2520s%25C3%25B6kningar%250Aoch%2520intolerans.%22]],6%5D"></iframe>
            </div>
        		<div class="caption">
        			Precis som när du ställer ledande frågor i verkligheten resulterar vinklade sökningar i vinklade svar, vilket kan förstärka fördomar och leda till ökad intolerans. Tryck på pilarna i valfri cirkel för att öka eller minska dess styrka.
        		</div>
            <div class="source">
              Källa: <a href="http://ncase.me/loopy/v1.1/?data=[[[3,423,356,0,%22Intolerans%22,0],[4,595,224,0,%22Vinklade%2520fr%25C3%25A5gor%22,5],[5,768,363,0,%22Vinklade%2520svar%22,5],[6,603,494,0,%22F%25C3%25B6rdomar%22,5]],[[3,4,53,1,0],[4,5,62,1,0],[5,6,44,1,0],[6,3,60,1,0]],[[594,372,%22Vinklade%2520s%25C3%25B6kningar%250Aoch%2520intolerans.%22]],6%5D" title="Loopy" target="_blank">Loopy</a>
        		</div>
      		</div>
      	</media-container-->

        <h3>Workshops & föreläsningar</h3>

        <p>
          Mikoteket erbjuder handledda workshops inom medie- och informationskunnighet (MIK) och digital kompetens. Upplägget, som är särskilt inriktat mot skola och bibliotek, består av föreläsningar och en mängd praktiska övningar och diskussioner.
        </p>

        <p>
          <a-route href="/workshop" class="button">Läs mer om workshops och föreläsningar</a-route>
        </p>

        <!--h3>Mikoteket på Facebook</h3>

        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikoteket%2F&tabs=timeline&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1595080274133613" height="300" style="border:none;overflow:scroll" scrolling="no" frameborder="0" allowTransparency="true"></iframe-->

      </div>

      <div class="columnRight">
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import CoverImage from '../CoverImage.vue'
import ARoute from '@/components/ARoute.vue'
import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'
import Quote from '@/components/quote.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'

export default {
  components: {
    CoverImage,
    ARoute,
    AWiki,
    InfoFields,
    SearchComponent,
    Quote,
    MediaContainer
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
