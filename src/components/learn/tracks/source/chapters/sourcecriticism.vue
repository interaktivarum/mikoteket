<template>
  <div>

    <p>
      Att vara <a-wiki c="Källkritik">källkritisk</a-wiki> handlar om att bedöma trovärdigheten i <a-wiki c="Källmaterial">källor</a-wiki> och följaktligen den information som man tar del av. Detta gäller såväl offline som på webben. Källor som vi möter dagligen kan exempelvis vara tryckta och digitala dagstidningar, historieböcker och <a-wiki c="Blogg">bloggar</a-wiki>, radioprogram och <a-wiki c="Poddradio">poddar</a-wiki> samt övriga platser eller ting från vilka vi hämtar information.
    </p>

    <p>
      Källor som innehåller ursprunglig information kallas för <a-wiki c="Primärkälla">primärkällor</a-wiki> medan <a-wiki c="Sekundärkälla">sekundär-</a-wiki>, tredjeparts- och efterföljande källor återger eller bygger vidare på vad tidigare källor har angivit, se tabell nedan för exempel.
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
      Källkritik är en <a-wiki c="Vetenskaplig_metod">vetenskaplig metod</a-wiki> som är kraftfull för såväl historieforskare, journalister och dig som internetanvändare. Även om det är upp till dig själv att slutgiltigt avgöra en källas trovärdighet så finns det steg och frågor att besvara, som hjälper dig på vägen.
    </p>

    <p>
      Ett första steg är avgöra vem som är avsändaren.
    </p>

    <source-check query="Vem står bakom källan?" opts='["En myndighet","Ett politiskt parti","En organisation/förening","Ett företag","En privatperson","Vet ej"]' opt1="Nej" opt2="Vet ej" msgs='["Bra, detta ökar trovärdigheten!","Informationen stämmer förhoppningsvis, men kan vara noga utvald för att påverka dig.","Undersök organisationens/föreningens syfte. Verkar det seriöst?","Vad tjänar företaget på att förmedla informationen till dig? Påverkar det trovärdigheten?","Vet du något om, eller känner du personen? Är det någon du litar på?","Det verkar otydligt vem som är avsändaren. Detta minskar trovärdigheten."]' classes='["yes","mix","mix","mix","mix","no"]'></source-check>

    <p>
      Ifall avsändaren verkar trovärdig behöver du fundera på varför just denna information är skapad. Det kan vara svårt att avgöra syftet till en källa, även om informationen är sanningsenlig kan den vara selektivt utvald i syfte att påverka dig eller skapa <a-wiki c="Opinion">opinion</a-wiki>.
    </p>

    <source-check query="Varför är källan skapad?" opts='["För att informera","För att påverka/övertyga","För att sälja en produkt/tjänst","För att underhålla","Annat"]' opt1="Nej" opt2="Vet ej" msgs='["Bra, detta ökar trovärdigheten! Verifiera gärna informationen hos andra källor, annars är risken att avsändaren försöker vilseleda dig.","Var uppmärksam och låt dig inte vilsledas. Verifiera informationen hos andra källor och ta gärna del av andra åsikter för att skapa din egen uppfattning.","Informationen är noggrant formulerad för att påverka dig. Berättas hela sanningen eller förskönas produkten/tjänsten?","Tänk på att även underhållning kan vara skapad med förhoppning att påverka dig som konsument.","Fundera på hur du eller andra påverkas av informationen. Kan avsändaren eller annan grupp dra nytta av detta?"]' classes='["yes","mix","mix","mix","mix"]'></source-check>

    Hur vet man detta?

    <source-check query="Är källan en primärkälla?" opts='["Ja","Nej","Vet ej"]' opt1="Nej" opt2="Vet ej" msgs='["Bra, detta ökar trovärdigheten! Men tänk på att även primärkällor kan ge falsk information.","Stämmer informationen med refererade källor? Undersök dessa för att avgöra trovärdigheten.","Källan verkar otydlig med var informationen kommer ifrån. Detta minskar trovärdigheten."]' classes='["yes","mix","no"]'></source-check>

    <p>
      För att bedöma en källas trovärdighet är ett viktigt steg att kunna verifiera informationen. Stämmer informationen överens med vad andra källor skriver om samma ämne eller händelse?
    </p>

    <source-check query="Stämmer informationen överens med andra trovärdiga källor?" opts='["Ja","Nej","Delvis"]' msgs='["Bra, detta ökar trovärdigheten!","Informationen verkar inte trovärdig.","Folk verkar ha blandade åsikter kring informationen. Jämför gärna ytterligare källor, och väg andra parametrar tyngre."]' classes='["yes","no","mix"]'></source-check>

    <p>
      Utöver att granska själva informationen är det även viktigt att lära känna sina källor.
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
      'header': 'Källkritik offline och online'
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
  padding: 5px;
  text-align: center;
}

td input{
  font-size: 13pt;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

</style>
