<template>
  <div>

    <p>
      Att vara <a-wiki c="Källkritik">källkritisk</a-wiki> handlar om att bedöma trovärdigheten i <a-wiki c="Källmaterial">källor</a-wiki> och följaktligen den information som man tar del av. Detta gäller såväl offline som på webben. Källor som vi möter dagligen kan exempelvis vara tryckta och digitala dagstidningar, facklitteratur och <a-wiki c="Blogg">bloggar</a-wiki>, radioprogram och <a-wiki c="Poddradio">poddar</a-wiki> samt övriga platser eller ting från vilka vi hämtar information.
    </p>

    <p>
      Källor som innehåller ursprunglig förstahandsinformation kallas för <a-wiki c="Primärkälla">primärkällor</a-wiki> medan <a-wiki c="Sekundärkälla">sekundär-</a-wiki>, tredjeparts- och efterföljande källor återger eller bygger vidare på vad tidigare källor har angivit, se tabell nedan för exempel.
    </p>

    <table>
      <tr>
        <td>
          Primärkälla
          <hr />
          <span class="small">Ursprunglig information</span>
        </td>
        <td>
          Sekundärkälla
          <hr />
          <span class="small">Återger primärkällor</span>
        </td>
        <td>
          Tredjeparts / efterföljande källa
          <hr />
          <span class="small">Återger tidigare källor</span>
        </td>
        <td>
          Exempel
        </td>
      </tr>
      <tr>
        <td>
          Oljemålning
        </td>
        <td>
          Fotografi av målningen
          <hr />
          Konstvetares beskrivning av tavlan
        </td>
        <td>
          Uppladdad bild på en webbsida
          <hr />
          Textmaterial i museifolder
        </td>
        <td>
          Skoklosters slott: <a href="http://skoklostersslott.se/sv/vertumnus/vertumnus">Vertumnus</a>
        </td>
      </tr>
      <tr>
        <td>
          Vittnesmål
        </td>
        <td>
          Anteckningar från intervju
          <hr />
          Anteckningar i rättsal
        </td>
        <td>
          Nyhetsartikel
          <hr />
          Rättsprotokoll
        </td>
        <td>
        SVT Nyheter: <a href="https://www.svt.se/nyheter/inrikes/vittne-det-ar-fullkomligt-kaos" title="Vittne: Det är fullkomligt kaos" target="_blank">Vittne: ”Det är fullkomligt kaos”</a>
        </td>
      </tr>
      <tr>
        <td>
          Arkeologiska fynd
        </td>
        <td>
          Arkeologs/historikers avgörande
          <hr />
          3D-scanning
        </td>
        <td>
          Läromedel i skolan
          <hr />
          3D-visualisering i ett datorprogram
        </td>
        <td>
          Inside Explorer: <a href="http://www.interspectral.com/projects/mummy-explorer/">3D-scannad mumie</a>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Primärkälla"/>
        </td>
        <td>
          <input type="text"  placeholder="Sekundärkälla"/>
        </td>
        <td>
          <input type="text"  placeholder="Efterföljande källa"/>
        </td>
      </tr>
      <!--tr>
        <td>
          <input type="text" placeholder="Primärkälla"/>
        </td>
        <td>
          <input type="text"  placeholder="Sekundärkälla"/>
        </td>
        <td>
          <input type="text"  placeholder="Efterföljande källa"/>
        </td>
        <td>
          Rökstenen: <a href="http://www.rokstenen.se/historia" title="Rökstenen" target="_blank">Världens längsta runinskrift</a>
        </td>
      </tr-->
      <tr>
        <td>
          <input type="text" placeholder="Primärkälla"/>
        </td>
        <td>
          <input type="text"  placeholder="Sekundärkälla"/>
        </td>
        <td>
          <input type="text"  placeholder="Efterföljande källa"/>
        </td>
        <td>
          Aftonbladet: <a href="https://www.aftonbladet.se/nyheter/article12493959.ab" title="Hovet: Victoria är inte gravid" target="_blank">Hovet: Victoria är inte gravid</a>
        </td>
      </tr>
    </table>
    <div class="caption">
      Exempel på primärkällor och möjliga sekundär- och tredjepartskällor.
    </div>

    <info-fields class="infoFields">

      <div class="excercise">

        <div class="hBox">
          TESTA SJÄLV: DISKUTERA OCH SKAPA KÄLLOR
        </div>

        Diskutera källorna i tabellen ovan.

        <p>
          <strong>Rad 1-3</strong>: Diskutera källorna och informationsflödet.
        </p>

        <p>
          <strong>Rad 4</strong>: Ange en primärkälla och möjliga sekundär- och tredjepartskällor. Arbeta från vänster till höger.
        </p>

        <p>
          <strong>Rad 5</strong>: Utgå ifrån länken och identifiera och ge exempel på källor. Arbeta från höger till vänster.
        </p>

        <div class="hBox">
          DISKUTERA
        </div>

        <ul>
          <li>
            Hur kan sekundär- och tredjepartskällor förstärka/försvaga/förändra/förvränga den ursprungliga informationen? Hur påverkas trovärdigheten?
          </li>
          <li>
            Vad för källor är spekulationer, kändisskvaller och rykten?
          </li>
        </ul>

      </div>

    </info-fields>

    <h3>Metodik</h3>

    <p>
      Källkritik är en <a-wiki c="Vetenskaplig_metod">vetenskaplig metod</a-wiki> som är kraftfull för såväl historieforskare, journalister och dig som internetanvändare. Det är upp till dig själv att slutgiltigt avgöra en källas trovärdighet, och som hjälp på vägen finns det steg och frågor att resonera kring.
    </p>

    <p>
      Ett bra första steg är att avgöra vem som är avsändaren. Det kan till exempel vara en tidningsredaktion som ägs av ett aktiebolag, eller en privatperson som driver en egen webbsida. Finns det mer information att läsa om avsändaren, och vad säger andra om dess trovärdighet?
    </p>

    <source-check query="Vem står bakom källan?" opts='["En myndighet","Ett politiskt parti","En organisation / förening","Ett företag","En privatperson","Vet ej"]' msgs='["Bra, detta ökar trovärdigheten!","Informationen stämmer förhoppningsvis, men kan vara noga utvald för att påverka dig.","Undersök organisationens/föreningens syfte. Verkar det seriöst?","Vad tjänar företaget på att förmedla informationen till dig? Påverkar det trovärdigheten?","Vet du något om, eller känner du personen? Är det någon du litar på?","Det verkar otydligt vem som är avsändaren. Detta minskar trovärdigheten."]' classes='["yes","mix","mix","mix","mix","no"]'></source-check>

    <br />

    <p>
      Olika typer av information anses olika trovärdiga. Vedertagen fakta anses exempelvis ha avsevärt högre trovärdighet än kändisskvaller.
    </p>

    <source-check query="Vilken typ av information innehåller källan?" opts='["Fakta","Personliga åsikter","Spekulationer / rykten","Vet ej"]' msgs='["Bra, detta ökar trovärdigheten! Verifiera gärna informationen hos andra källor.","Var medveten om att åsikter inte är fakta. Ta gärna del av andra perspektiv för att skapa din egen uppfattning.","Rykten kan lätt få stor spridning utan grund. Granska påståendena hos andra trovärdiga källor.","Källan verkar ge otydlig information. Risken är att informationen är falsk eller ogrundad och skapad i syfte att påverka dig."]' classes='["yes","mix","no","no"]'></source-check>

    <br />

    <p>
      Du behöver fundera på varför just denna information är skapad. Ibland är det svårt att avgöra syftet till en källa; även om innehållet är sant kan informationen vara selektivt utvald i syfte att påverka dig eller för att skapa <a-wiki c="Opinion">opinion</a-wiki>.
    </p>

    <source-check query="Varför är källan skapad?" opts='["För att informera","För att påverka/övertyga","För att sälja en produkt/tjänst","För att underhålla","Annat"]' opt1="Nej" opt2="Vet ej" msgs='["Bra, detta ökar trovärdigheten! Verifiera gärna informationen hos andra källor, annars är risken att avsändaren försöker vilseleda dig.","Var uppmärksam och låt dig inte vilsledas. Verifiera informationen hos andra källor och ta gärna del av andra åsikter för att skapa din egen uppfattning.","Informationen är noggrant formulerad för att påverka dig. Berättas hela sanningen eller förskönas produkten/tjänsten?","Tänk på att även underhållning kan vara skapad med förhoppning att påverka dig som konsument.","Fundera på hur du eller andra påverkas av informationen. Kan avsändaren eller annan grupp dra nytta av detta?"]' classes='["yes","mix","mix","mix","mix"]'></source-check>

    <br />

    <p>
      Varifrån kommer informationen, och överenstämmer den med refererade källor? Varför har man valt just dessa källor, och berättar man hela sanningen?
    </p>

    <source-check query="Är källan en primärkälla?" opts='["Ja","Nej, refererade källor finns","Nej, men referenser saknas","Vet ej"]' msgs='["Bra, detta ökar trovärdigheten! Men tänk på att även primärkällor kan ge falsk information.","Stämmer informationen med refererade källor? Varför har man valt att referera just dessa källor? Anges de ursprungliga primärkällorna?","Källan verkar otydlig med var informationen kommer ifrån. Detta minskar trovärdigheten.","Källan verkar otydlig med var informationen kommer ifrån. Detta minskar trovärdigheten."]' classes='["yes","mix","no","no"]'></source-check>

    <br />

    <p>
      För att avgöra ifall viss information stämmer är det viktigt att kunna verifiera denna. Stämmer informationen överens med vad andra källor skriver om samma ämne eller händelse?
    </p>

    <source-check query="Stämmer informationen överens med andra trovärdiga källor?" opts='["Ja","Nej","Delvis"]' msgs='["Bra, detta ökar trovärdigheten!","Informationen strider mot andra trovärdiga källor. Detta minskar trovärdigheten.","Det verkar finnas blandade åsikter kring informationen. Jämför gärna ytterligare källor, och lägg vikt vid övriga frågeställningar."]' classes='["yes","no","mix"]'></source-check>

    <br />

    <p>
      När du verifierar information hos olika källor är det viktigt att undersöka eventuellt beroende mellan dessa. Har källorna samma mål och syfte? Delar de politisk ideologi eller uppfattning? Hänger de rentav ihop organisatoriskt? Fundera på ifall källan berättar ett snävt perspektiv eller om det finns andra vinklar att ta del av.
    </p>

    <source-check query="Är källorna oberoende?" opts='["Ja","Nej / vet ej"]' msgs='["Bra, detta ökar trovärdigheten!","Källorna berättar eventuellt inte hela sanningen, utan förstärker en specifik vinkling. Undersök gärna andra oberoende källor efter andra perspektiv."]' classes='["yes","mix"]'></source-check>

    <br />

    <p>
      Olika typ av information åldras olika snabbt eller förändras över tid. Medan en runinskrift fortfarande har stor relevans tusen år efter sin uppkomst, har färska nyheter ofta betydligt kortare livslängd. Även vetenskapen utvecklas alltjämt av nya upptäckter som förändrar eller motbevisar gamla forskningsrön. Beroende på typ av information behöver du avgöra ifall denna fortfarande är aktuell och relevant.
    </p>

    <source-check query="Är informationen aktuell?" opts='["Ja, det är väl etablerad information","Ja, det är information om en färsk händelse","Nej / vet ej"]' msgs='["Bra, detta ökar trovärdigheten!","Verifiera gärna informationen hos andra källor, risken är annars att avsändaren försöker dra nytta av stundens hetta.","Informationen kan fortfarande stämma, men undersök ifall det finns andra uppdaterade källor."]' classes='["yes","mix","mix","mix"]'></source-check>

    <br />

    <p>
      Frågorna ovan är generellt formulerade. De ger inga absoluta svar och har i praktiken många möjliga svarsalternativ. Använd dem för att komma igång med att öva ditt egna källkritiska tänkande. Beroende på källa och innehåll har du möjlighet att formulera egna smarta frågeställningar.
    </p>

    <p>
       Kom ihåg: i slutändan är det upp till dig själv att avgöra trovärdigheten i den information du tar del av.
    </p>

    <h3>Att öva sitt källkritiska tänkande</h3>

    <p>
      Ha som vana att resonera kring ovanstående frågor när du ställs inför ny information. Särskilt inom områden kring vilka det finns många starka åsikter.
    </p>

    <p>
      Till en början behöver du kanske aktivt tvinga fram dessa frågeställningar, och det kan vara svårt att veta vad du letar efter. Fundera då särskilt på vem som ligger bakom informationen, vad syftet är och ifall finns det någon individ eller grupp som kan tjäna på att påverka dig som läsare. Undersök ifall informationen verkar stämma, genom att besöka andra oberoende källor.
    </p>

    <p>
       Inom kort kommer du märka att dessa resonemang och det kritiska tänkandet kommer av sig självt. Du kommer att lära känna dina källor och veta vilken information som vanligen sprids. Du kommer att veta hur du tar del av andra perspektiv, och nyfiket fundera på trovärdigheten i respektive vinkling.
    </p>

    <p>
      Att vara källkritisk betyder inte att avfärda all information som <a-wiki c="Fejknyheter">fake news</a-wiki>. Det är när du metodiskt bedömer innehållet som trovärdigt eller opålitligt som du har blivit en riktigt bra källkritiker!
    </p>

  </div>
</template>

<script>

import AWiki from '@/components/AWiki.vue'
import InfoFields from '@/components/learn/InfoFields.vue'
import SoiGraph from '@/components/SoiGraph.vue'
import SwitchesComponent from '@/components/learn/SwitchesComponent.vue'
import SourceCheck from '@/components/learn/SourceCheck.vue'

export default {
  components: {
    AWiki,
    InfoFields,
    SoiGraph,
    SwitchesComponent,
    SourceCheck
  },
  data () {
    return {
      'header': 'Den källkritiska metoden'
    }
  },
  created () {
  }
}
</script>

<style scoped>

table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

table, th, td {
    border: 1px solid black;
}

table{
  border-width: 2px;
}

table > :first-child{
  background: #ff6600;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

td{
  padding: 10px;
  text-align: left;
}

td input{
  font-size: 13pt;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

</style>
