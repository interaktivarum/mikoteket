<template>
  <div>

  <p>
    <a-wiki c="Design">Design</a-wiki> är ett begrepp som innefattar såväl fysiska som digitala objekts funktionalitet och estetik. Ett objekt kan vara exempelvis en kratta, en tekanna, en knapp eller en webbplats. Den övergripande designen består ofta av många olika designelement, exempelvis består en webbplats av textavsnitt, bilder, länkar och knappar, m.m. vilka presenteras i en särskild <a-wiki c="Layout">layout</a-wiki>.
  </p>

  <p>
    Det är vanligt att skilja på <a-wiki c="Grafisk_formgivning">grafisk design</a-wiki> och <a-wiki c="Interaktionsdesign">interaktionsdesign</a-wiki>. Då grafisk design till stor del handlar om det visuella uttycket på exempelvis en trycksak eller en webbplats, handlar interaktionsdesign mer om användningen av objektet och hur det ska utformas för bästa <a-wiki c="Användbarhet">användbarhet</a-wiki>. Båda delar är viktiga för att i tillsammans skapa en tillgänglig design.
  </p>

  <info-fields class="infoFields">

    <div class="excercise">

      <div class="hBox">
        Dålig design
      </div>

      <p>
        Diskutera nedan exempel av dålig grafisk design och interaktionsdesign.
      </p>

      <ol>
        <li>
          Dålig grafisk design: <span class="bd-links"><a href="http://www.google.com" target="_blank"><span class="pointer">en omarkerad länk</span></a></span>.
        </li>
        <li>
          Dålig interaktionsdesign: inmatningsfält med bristande instruktioner och återkoppling.
          <div class="badInput">
            <input type="text" placeholder="Ange personnummer" pattern="^[0-9]{8}-[0-9]{4}$"/>
            <span>Ange personnummer i rätt format</span>
          </div>
        </li>
      </ol>

      <div class="hBox">
        DISKUTERA
      </div>
      <ul>
        <li>
          På vilka sätt brister designen i respektive fall?
        </li>
        <li>
          Hur kan designen förbättras för ökad användbarhet?
        </li>
      </ul>

    </div>
  </info-fields>


  <h3>Förmedla och möjliggöra funktionalitet</h3>

  <p>
    Bra design ska, utöver att vara estetiskt tilltalande, förmedla eller synliggöra objektets funktion: <i>vad</i> används objektet till, och <i>hur</i> används det? Vice versa ska objektet vara designat så att den avsedda och förväntade funktionaliteten möjliggörs.
  </p>

  <p>
     Vidare bör all design utgå från den tänkta användaren och dennes behov. Hänsyn ska tas till användarens förkunskaper, förutsättningar och begränsingar, den tid och situation då objektet är tänkt att användas, samt övrigt som påverkar hur objektet eller användandet av detsamma upplevs av den tilltänkte användaren.
  </p>

  <p>
    Många av våra vardagliga föremål har en väl genomarbetad design som vi ofta tar för given och inte funderar särskilt mycket kring. För att synliggöra designen i vardagsföremål skapar konstnären Katerina Kamprani i projektet <a href="https://www.theuncomfortable.com" target="_blank">The Uncomfortable</a> objekt i vilka den obekväma designen motverkar, snarare än stödjer, den funktionalitet användaren förväntar sig eller är van vid.
  </p>



  <info-fields class="infoFields">

    <div class="excercise">

      <div class="hBox">
        Skapa obekväm design
      </div>

      <p>
        Utgå ifrån ett valfritt vardagligt föremål, exempelvis något som du har i väskan eller som finns i rummet, och fundera över dess design. Rita gärna en skiss!
      </p>

      <div class="hBox">
        DISKUTERA
      </div>

      <ul>
        <li>
          Vilken funktion har objektet?
        </li>
        <li>
          Hur stödjer objektets design denna funktionalitet?
        </li>
        <li>
          Hur kan designen ändras för att försvåra eller motverka objektets funktion?
        </li>
      </ul>

    </div>

  </info-fields>

  <info-fields class="infoFields">

    <div class="excercise">

      <div class="hBox">
        Tillgängliggör design
      </div>

      <p>
        Utgå ifrån ett valfritt objekt, exempelvis något i rummet du befinner dig i, och fundera över dess design ur ett tillgänglighetsperspektiv. Rita gärna en skiss!
      </p>

      <div class="hBox">
        DISKUTERA
      </div>

      <ul>
        <li>
          Vilken funktion har objektet?
        </li>
        <li>
          Hur stödjer objektets design denna funktionalitet?
        </li>
        <li>
          Vilka personer kan uppleva svårigheter att använda objektet?
        </li>
        <li>
          Hur kan designen ändras för förenklad användning för ovan identifierade personer?
        </li>
        <li>
          Hur påverkar designändringarna användningen för personer som även tidigare kunde använda objektet?
        </li>
      </ul>

    </div>

  </info-fields>

  <h3>Webbriktlinjer och tillgänglighet</h3>

  <p>
    När man designar och utvecklar webbplatser finns det internationellt framtagna <a href="https://www.w3.org/standards/" target="_blank">riktlinjer och standarder</a> att följa. På <a href="https://webbriktlinjer.se/" target="_blank">Webbriktlinjer.se</a> anges de officiella riktlinjerna för hur svensk offentlig sektor bör arbeta med webbplatser. I avdelningen <a href="https://webbriktlinjer.se/webbforalla/" target="_blank">Webb för alla</a> presenteras särskilt information om webbutveckling ur ett tillgänglighetsperspektiv.<!--, framtagna av <a href="https://www.digg.se/" target="_blank">Myndigheten för digital förvaltning</a> och <a href="https://pts.se/" target="_blank">Post- och telestyrelsen</a>.-->
  </p>

  <p>
    En grundprincip är att användarens kognitiva belastning ska minimeras. Information ska vara enkel att hitta och användaren ska känna att hen är i kontroll.
  </p>

  <p>
    Nedan följer ett par grundläggande designprinciper härledda från webbriktlinjerna:
    <ul class="nested">
      <li>
        Information ska vara tydligt strukturerad.
        <ul>
          <li>
            Det ska vara enkelt att skilja på webbplatsens olika delar.
          </li>
          <li>
            Information ska presenteras i en logisk och konsekvent följd.
          </li>
          <li>
            Alternativa texter ska finnas för bilder, videor, länkar, etc.
          </li>
          <li>
            Överflödig information och intryck ska undvikas.
          </li>
        </ul>
      </li>
      <li>
        Textavsnitt ska vara läsbara.
        <ul>
          <li>
            Typsnitt ska vara tydliga och i lagom textstorlek.
          </li>
          <li>
            Språket ska vara anpassat till användaren.
          </li>
          <li>
            Färger ska användas måttligt, genomtänkt och ge bra kontraster.
          </li>
        </ul>
      </li>
      <li>
        Designa för mobila och små skärmar
        <ul>
            <li>
              Layouten ska anpassas automatiskt till olika skärmstorlekar
            </li>
            <li>
              Knappar och andra interaktiva element ska ha tillräckligt stor klick- och touchyta
            </li>
            <li>
              Interaktiva element ska inte ligga för tätt
            </li>
        </ul>
      </li>
      <li>
        Synliggör funktionaliteten.
        <ul>
          <li>
            <a>Länkar</a>, <button>knappar</button>, etc. ska vara tydligt markerade.
          </li>

          <li>
            Effekten av en interaktion ska vara tydlig, användaren ska inte behöva gissa eller testa vad som kommer att hända.
          </li>
        </ul>
      </li>
      <li>
        Ge återkoppling vid interaktion.
        <ul>
          <li>
            Effekten av en interaktion ska ske <i>när</i> och <i>där</i> användaren interagerar, inte med fördröjning eller på någon annan del av skärmen.
          </li>
          <li>
            Vid behov, visa vad som pågår, exempelvis vid laddning av data.
          </li>
          <li>
            Undvik möjligheten för användaren att göra fel eller ge tydliga felmeddelanden.
          </li>

        </ul>
      </li>
      <li>
        Navigation
        <ul>
          <li>
            Det ska gå att navigera med tangentbordet, och se vad som är markerat. Exempel: <button>Klicka på mig</button> <button>Tryck på tab-tangenten</button> <button>Tryck på tab-tangenten igen</button> <button>Och igen...</button>.
          </li>
          <li>
            Erbjud möjligheten att avbryta samt att gå tillbaka.
          </li>
        </ul>
      </li>
    </ul>
  </p>

  <p>
    Väl strukturerad information enligt standarder är en förutsättning för många tillgänglighetsverktyg att fungera. Utvecklare av webbplatser kan även bygga in färdigt stöd för tillgänglighetsanpassning, som inte kräver att användaren själv installerar nödvändiga verktyg. Detta är särskilt viktigt vid användning av exempelvis publika datorer eller i system där användaren inte själv har behörighet eller möjlighet att installera nya program.
  </p>

  <p>
    För ökad tillgänglighet bör webbplatsen gå att anpassa efter egna behov, och erbjuda möjligheten att:
    <ul>
      <li>
        Ändra textstorleken.
      </li>
      <li>
        Zooma.
      </li>
      <li>
        Ändra färger.
      </li>
      <li>
        Dölja störande eller överflödiga element.
      </li>
      <li>
        Navigera och hitta information på fler än ett sätt.
      </li>
      <li>
        Skapa direktlänkar till information.
      </li>
    </ul>
  </p>

  <p>
    Mikotekets webbplats erbjuder ett antal <router-link :to="{ name: 'Accessibility'}">inbyggda tillgänglighetsverktyg</router-link> som inte förutsätter att användaren installerar nya program.
  </p>

  <media-container class="mediaContainer">
    <div>
      <div class="content">
        <iframe src="https://player.vimeo.com/video/123300019" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div class="caption">
        E-delegationen presenterar i sin video tre personer som berättar hur deras respektive funktionsnedsättning påverkar deras upplevelse på webben, samt ger förslag på förbättringar.
      </div>
      <div class="source">
        Källa: <a href="https://vimeo.com/123300019" title="Vimeo: Viktors hemligheter - #webbföralla" target="_blank">E-delegationen (Vimeo)</a>
      </div>
    </div>
  </media-container>

  <info-fields class="infoFields">

    <div class="excercise">

      <div class="hBox">
        Förändra webbplatsens design
      </div>

      <p>
        Använd knappen nedan för att förändra delar av designen på denna webbplats. Designen förändras varje gång du klickar på knappen.
      </p>

      <button @click="uglify()">Ändra design</button>
      <button @click="resetDesign()" v-if="badDesign">Återställ design</button>

      <div class="hBox">
        DISKUTERA
      </div>

      <ul>
        <li>
          Vilken specifik del av designen förändras vid respektive knapptryck?
        </li>
        <li>
          Hur påverkar respektive designförändring sidans läsbarhet och tillgänglighet?
        </li>
      </ul>

    </div>

    <div class="excercise">

      <div class="hBox">
        Återkoppling
      </div>

      <p>
        Starta övningen genom att klicka på knappen nedan.
      </p>

      <button @click="addClick()">Starta övning</button>

      <div class="hBox">
        DISKUTERA
      </div>

      <ul>
        <li>
          Vad är den förväntade effekten då du klickar på knappen?
        </li>
        <li>
          Hur många gånger har du klickat på knappen? <span @click="showClick = true" v-if="!showClick" class="showClick">Klicka här för att se svar.</span><span v-if="showClick"> Du har klickat {{clickCounter}} gånger.</span>
        </li>
        <li>
          Vilken känsla får du som användare när systemet inte beter sig som förväntat?
        </li>
        <li>
          Varför är det viktigt att system ger återkoppling till användaren?
        </li>
      </ul>

    </div>

    <div class="excercise">

      <div class="hBox">
        Granska en webbplats
      </div>

      <p>
        Välj en valfri webbplats och granska dess design.
      </p>

      <div class="hBox">
        DISKUTERA
      </div>

      <ul>
        <li>
          Vilken typ av information innehåller webbplatsen?
        </li>
        <li>
          Vem riktar sig webbplatsen till?
        </li>
        <li>
          Är det enkelt att få en överblick, navigera och hitta den information man söker?
        </li>
        <li>
          Innehåller webbplatsen mycket, för besökaren, irrelevant information?
        </li>
        <li>
          Går det att anpassa webbplatsen efter egna behov?
        </li>
      </ul>

    </div>

    <div class="more">

      <div class="hBox">
        Fördjupning
      </div>

      <ul>
        <li>
          Sammanställning och exemplifiering av de viktigaste webbriktlinjerna: <a href="https://webbriktlinjer.se/wcag/" target="_blank">WCAG – standard för tillgänglighet</a>
        </li>
        <li>
          Svensk översättning av <a href="http://www.certec.lth.se/fileadmin/certec/publikationer/De_7_Principerna_foer_Universell_Design.pdf" target="_blank">Principerna för Universell Design</a>.
        </li>
        <li>
          <a-wiki c="Jakob_Nielsen_(datalog)#Nielsens_tio_heuristiska_principer[1]">Nielsens tio heuristiska principer</a-wiki> för gränssnittsdesign.
        </li>
      </ul>

    </div>

  </info-fields>

  <h3>Design för alla</h3>

  <p>
    Idag har en övervägande majoritet av Sveriges befolkning <a href="https://2018.svenskarnaochinternet.se/allmant-om-internetutvecklingen/" target="_blank">tillgång till internet i hemmet</a>, vilket har öppnat upp för en mängd spännande innovationer. Dock är det, enligt <a href="https://2018.svenskarnaochinternet.se/" target="_blank">Svenskarna och internet 2018</a>, idag <a href="https://2018.svenskarnaochinternet.se/digitalt-utanforskap/" target="_blank">en halv miljon svenskar som aldrig använder internet</a>, personer som särskilt återfinns bland den äldre befolkningen. De två främsta skälen anges vara inget intresse/inte användbart samt krånglig teknik/kan inte, vilket belyser vikten av att designa tillgänglig teknik med användaren i fokus.
  </p>

  <soi-graph graph="779"></soi-graph>

  <p>
    Begreppen <a-wiki c="Design_för_alla">Design för Alla</a-wiki> och <a-wiki c="Universell_utformning">Universell design</a-wiki> innebär att produkter och tjänster ska utformas för att kunna tillgodoses av så många som möjligt utan behov av speciella anpassningar. En grunddesign som är tillgänglig för personer med särskilda behov innebär ofta fördelar för alla personer, oavsett funktionsförmåga, ålder eller tidigare erfarenhet.
  </p>

  <p>
    Enligt Webbriktlinjer har cirka en av fem personer en funktionsnedsättning, och ännu fler har det periodvis i livet. Man brukar skilja på <span class="semibold">permanenta</span> (blindhet, dövhet, etc.), <span class="semibold">temporära</span> (starr, öroninfektion) och <span class="semibold">situationsberoende</span> (bländning, bullriga miljöer) nedsättningar. Genom att designa för ytterligheterna, exempelvis för personer med permanenta nedsättningar, så skapar man ofta även en tillgänglig design för många fler.
  </p>

  <p>
    Kort och gott tjänar alla på ökad tillgänglighet!
  </p>

  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'
import SoiGraph from '@/components/SoiGraph.vue'
import SlideComponent from '@/components/learn/SlideComponent.vue'
import EmbedTwitter from '@/components/embed/EmbedTwitter.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    MediaContainer,
    SearchComponent,
    SoiGraph,
    SlideComponent,
    EmbedTwitter
  },
  data () {
    return {
      'header': 'Design och tillgänglighet',
      badDesign: false,
      bdClasses: ['bd-justify','bd-nomargin','bd-links','bd-contrast','bd-uppercase'],
      bdClassActive: 0,
      clickCounter: 0,
      showClick: false
    }
  },
  methods: {
    uglify: function () {
      if(this.badDesign){
        this.resetDesign();
        this.bdClassActive = (this.bdClassActive+1)%this.bdClasses.length;
      }
      document.getElementsByTagName("BODY")[0].classList.add(this.bdClasses[this.bdClassActive]);
      this.badDesign = true;
    },
    resetDesign: function () {
      for(var i = 0; i < this.bdClasses.length; i++){
        document.getElementsByTagName("BODY")[0].classList.remove(this.bdClasses[i]);
      }
      this.badDesign = false;
    },
    addClick: function () {
      this.clickCounter++;
    },
  }
}
</script>

<style>

.badInput input:invalid{
  background: rgb(230,100,100);
}

.badInput input ~ span{
  display: none;
  color: red;
}

.badInput input:invalid ~ span{
  display: inline;
}

body.bd-serif *{
  font-family: serif !important;
}

body.bd-justify *{
  text-align: justify;
  text-align-last: justify;
}

body.bd-nomargin *{
  margin: 0px !important;
  padding: 0px !important;
}

body.bd-minimal *{
  background: inherit !important;
  color: black !important;
  border: 0 !important;
}

body.bd-contrast * {
  color: white !important;
  background: lightgray !important;
}

body.bd-borders *{
  border: 0 !important;
  outline: none;
}

body.bd-uppercase *{
  text-transform: uppercase !important;
}

.bd-links a, .bd-links button{
  color: inherit !important;
  font-weight: inherit !important;
  cursor: text !important;
  background: inherit !important;
  border: 0 !important;
  outline: none !important;
}

.showClick{
  cursor: pointer;
}

.showClick:hover{
  text-decoration: underline;
}

</style>
