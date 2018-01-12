<template>
  <div>

    <p>
      När en användare publicerar innehåll i exempelvis sociala medier så är det respektive plattforms <a-wiki c="algoritm">algoritmer</a-wiki> som avgör vem som kommer att se inlägget. Det kan ofta vara svårt att göra sin röst hörd i informationsbruset. Nya inlägg visas främst för den närmsta kretsen medan populära inlägg har potential att nå en betydligt större publik.
    </p>

    <p>
      Ett sätt för plattformarna att bedöma ett inläggs popularitet är att mäta till vilken grad andra användare interagerar med innehållet. Även om möjligheterna till engagemang skiljer sig från plattform till plattform, så är det vanligt är att låta användare:
    </p>

    <ul>
      <li>
        <span class="semibold">Klicka</span>: klicka på ett inlägg, e.g. för att läsa mer, förstora en bild eller besöka en länkad webbplats.
      </li>
      <li>
        <span class="semibold">Gilla/Reagera</span>: ge snabb, positiv feedback på inlägg, e.g. med en tumme upp eller hjärta. Facebook erbjuder, sedan 2016, ytterligare reaktioner: skratt, arg, ledsen och kärlek.
      </li>
      <li>
        <span class="semibold">Kommentera</span>: svara på ett befintligt inlägg eller en annan användares kommentar.
      </li>
      <li>
        <span class="semibold">Dela</span>: aktivt dela vidare en annan användares inlägg.
      </li>
      <li>
        <span class="semibold">Följa</span>: prenumerera på en annan användares inlägg.
      </li>
    </ul>

    <p>
      Alla dessa interaktioner gör att ett inlägg bedöms som mer populärt och spridningen till andra användare ökar. Utöver att låta användare aktivt interagera med inlägg så har plattformarna även möjlighet att bedöma popularitet utifrån passiva handlingar, e.g. hur länge en användare tittar på ett inlägg innan hen scrollar vidare i flödet.
    </p>

    <info-fields class="infoFields">

      <div class="summary">

  			<div class="hBox">
  				SAMMANFATTNING
  			</div>

  			Inlägg som skapar engagemang på sociala medier bedöms av algoritmerna som populära. Dessa visas automatiskt för fler användare och får därmed större spridning.

  		</div>

  	</info-fields>

    <h3>Personligt anpassat innehåll</h3>

    <h3>Virala inlägg</h3>

    <p>
      Ibland får inlägg eller nyheter så pass stor spridning i sociala medier och andra forum att de dyker upp i var och varannan persons nyhetsflöde. Sådana inlägg, som framförallt sprids i sociala nätverk och som ofta får oproportionerligt stor spridning i förhållande till sitt nyhetsvärde, kallas för virala. Det kan handla om enskilda inlägg som skapar stort engagemang, såväl som nyhetshändelser som genererar en uppsjö av inlägg från olika håll.
    </p>

    <p>
      Det är inte ovanligt att nyheter eller påståenden som spelar på folks känslor får stor spridning. Inte sällan handlar det om artiklar som får läsaren att känna rädsla eller som upprör.
    </p>

    <media-container class="mediaContainer">
      <div>
        <div class="content">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wc353OW5kW0" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="caption">
          Viralgranskaren och Internetstiftelsen jämför hur två olika personer hanterar en viral nyhet, med respektive utan ett källkritisk tänkande.
        </div>
        <div class="source">
          Källa: <a href="https://www.youtube.com/watch?v=wc353OW5kW0" title="Youtube: Källkritik på nätet är viktigare än någonsin" target="_blank">Youtube</a>
        </div>
      </div>
    </media-container>

    <h3>Memes</h3>

    <media-container class="mediaContainer">
      <div>
        <div class="content">
          <a href="https://imgflip.com/i/22hnkq" target="_blank">
            <img src="https://i.imgflip.com/22hnkq.jpg" title="Made at imgflip.com"/>
          </a>
        </div>
        <div class="caption">
          Meme med falskt citat av Albert Einstein.
        </div>
        <div class="source">
          Källa: <a href="https://imgflip.com/i/22hnkq" title="Imgflip" target="_blank">Imgflp</a>
        </div>
      </div>
    </media-container>


  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import SoiGraph from '@/components/SoiGraph.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    MediaContainer,
    SoiGraph
  },
  data () {
    return {
      'header': 'Spridning och virala inlägg'
    }
  },
  created () {

  }
}
</script>

<style>
</style>
