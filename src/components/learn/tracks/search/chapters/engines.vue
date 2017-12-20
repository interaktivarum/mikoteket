<template>
  <div>

		<p>
			Det finns flera populära sökmotorer på internet, varav den överlägset största är <a href="http://www.google.com" title="Google" target="_blank">Google</a>. Det är även på Google som vi kommer att fokusera i denna text. Andra populära sökmotorer är Microsofts <a href="http://www.bing.com" title="Bing" target="_blank">Bing</a>, <a href="http://www.yahoo.com" title="Yahoo" target="_blank">Yahoo!</a>, kinesiska <a href="http://www.baidu.com" title="Baidu" target="_blank">Baidu</a> samt <a href="http://www.duckduckgo.com" title="DuckDuckGo" target="_blank">DuckDuckGo</a> som jämfört med många andra sökmotorer har striktare riktlinjer kring användarintegritet och lagring av personliga uppgifter.
		</p>

		<p>
			Google och de andra sökmotorerna använder så kallade sökrobotar eller <a href="https://sv.wikipedia.org/wiki/Spindel_(internet)" title="Wikipedia: Spindel" target="_blank">spindlar</a> för att hålla ett konstant öga på internet och dess <a href="https://sv.wikipedia.org/wiki/Webbplats" title="Wikipedia: Webbplats" target="_blank">webbplatser</a>. Särskilt vikt läggs vid nya, ändrade eller borttagna webbsidor. Nytt innehåll (text, bilder, etc.) analyseras, och informationen indexeras och sparas i sökmotorernas egna <a href="https://sv.wikipedia.org/wiki/Databas" title="Wikipedia: Databas" target="_blank">databaser</a>, innehållande flera hundra miljarder webbsidor.
		</p>

		<p>
			När du gör en webbsökning så söker du egentligen bara i sökmotorns egna välstrukturerade databaser, även om upplevelsen är att du söker på "hela webben". På så sätt kan en sökmotor optimeras till att ge blixtsnabba svar och själv styra vilka resultat du ska se. Allt utifrån sina egna algoritmer.
		</p>

  	<media-container class="mediaContainer">
  		<div>
  		<iframe width="560" height="315" src="https://www.youtube.com/embed/BNHR6IQJGZs" frameborder="0" allowfullscreen></iframe>
  		<div class="caption">
  			Google förklarar hur webbsök fungerar i en video från 2010. Även om videon är flera år gammal är informationen fortfarande relevant.
  		</div>
  		Källa: <a href="https://www.youtube.com/watch?v=BNHR6IQJGZs" title="Youtube: How Search Works" target="_blank">Youtube</a>
  		</div>
  	</media-container>

  	<info-fields class="infoFields">
  		<div class="summary">

  			<div class="hBox">
  				SAMMANFATTNING
  			</div>

  			Sökmotorerna letar hela tiden efter nya webbplatser, ändringar på befintliga sidor, samt efter länkar som inte längre fungerar. Webbplatsernas innehåll analyseras och informationen sparas i sökmotorernas egna databaser.

  		</div>

  		<div class="more">

  			<div class="hBox">
  				FÖRDJUPNING
  			</div>

  			Google förklarar spindlar och indexering av webben:
  			<!--a href="https://www.google.com/search/howsearchworks/crawling-indexing/" title="How Search organizes information" target="_blank">How Search organizes information</a-->
  			<a href="https://www.google.se/insidesearch/howsearchworks/crawling-indexing.html" target="_blank">Genomsökning och indexering</a>

  		</div>
  	</info-fields>

    <h3>Sökmotorernas algoritmer</h3>

			<div>

				<p>
					Sökmotorerna, i.e. Google, är skapade för att ge relevanta resultat och hjälpa dig som användare att navigera på internet. För att lyckas med detta måste motorn först förstå vad du faktiskt söker efter, ett komplext problem som består av flera steg.
				</p>

				<p>
					Inledningsvis analyseras språk och grammatik. Detta innefattar bland annat att korrigera felstavningar, <a href="https://sv.wikipedia.org/wiki/Stemmer" title="Wikipedia: Stemmer" target="_blank">trunkering</a>, hitta relevanta synonymer samt att identifiera <a href="https://sv.wiktionary.org/wiki/nyckelord" title="Wiktionary: Nyckelord" target="_blank">nyckelord</a> och -termer. Detta är i grund och botten <a href="https://sv.wikipedia.org/wiki/Spr%C3%A5kteknologi" title="Wikipedia: Språkteknologi" target="_blank">språkteknologiska</a> utmaningar.
				</p>

				<p>
					Utifrån analysen ska motorn därefter hitta de webbsidor som bäst matchar sökningen. I resultatet så prioriteras sidor som är skrivna på ditt valda språk, och utifrån hundratals andra webbplats-specifika parametrar såsom sidans ålder, <a href="https://sv.wikipedia.org/wiki/Anv%C3%A4ndbarhet" title="Wikipedia: Användbarhet" target="_blank">användbarhet</a> och hur många andra webbsidor som länkar till webbplatsen.
				</p>

				<p>
					Nu har sökmotorn gjort ett första urval av relevanta sidor för din sökning, och det är dags att göra resultatet personligt anpassat. Även här spelar en mängd faktorer roll, inte minst din geografiska position - något som du säkert noterade i sökresultaten ovan då du föreslogs lokala fiskrestauranger. Att avgöra din geografiska position är förhållandevis enkelt, förutsatt att hårdvaran stödjer det och att du först tillåter webbplatsen att läsa dina koordinater.
				</p>

				<location-component></location-component>

				<p>
					 Många sökmotorer sparar även information om dina surfvanor för att ytterligare skräddarsy sökresultaten. Ifall du är idrotts- eller modeintresse så speglas detta sannolikt i dina sökningar och i de webbplatser du besöker. Detta noteras och registreras av sökmotorerna som hittar mönster och skapar sig en förståelse för vem du är. När du vid senare tillfälle söker på en geografisk ort, e.g. Göteborg, så kan denna information användas för att, exempelvis, ge personligt riktad information om idrottsevenemang eller klädbutiker på denna ort.
				</p>

				<p>
					 De resultat som <i>du</i> ser vid en sökning kan skilja sig avsevärt från en annan persons resultat, trots att ni har sökt på exakt samma term. Exakt vad som sker under huven och vilka parametrar som styr sökresultaten är det bara företaget bakom respektive sökmotor som vet.
				</p>

			</div>

			<info-fields class="infoFields">

				<div class="summary">

					<div class="hBox">
						SAMMANFATTNING
					</div>

					Sökmotorerna använder en mängd parametrar för att rangordna olika webbplatser vid en sökning, och ger personligt anpassade sökresultat utifrån din position, språkinställningar och tidigare sök- och surfhistorik. Två personer som gör samma sökning kan få helt olika resultat.

				</div>

				<div class="more">

					<div class="hBox">
						FÖRDJUPNING
					</div>

					Google förklarar sökalgoritmer:
					<!--a href="https://www.google.com/search/howsearchworks/algorithms/" target="_blank">How Search algorithms work</a-->
					<a href="https://www.google.se/insidesearch/howsearchworks/algorithms.html" title="Google: Algoritmer" target="_blank">Algoritmer</a>


				</div>
			</info-fields>

			<h3>En djupare förståelse</h3>

			<div>

				<p>
				Utöver att jämföra nyckelord så försöker sökmotorerna skapa en djupare förståelse för innehållet i en sökning. Det är därför som din tidigare sökning på <i>fisk</i> sannolikt gav flera olika typer av resultat, e.g. informationsrutor med relevanta biologifakta och -länkar blandat med tips på restauranger och recept.
				</p>

				<p>
					Avancerade sökmotorer använder <a href="https://sv.wikipedia.org/wiki/Artificiell_intelligens" title="Wikipedia: Artificiell intelligens" target="_blank">artificiell intelligens</a> (AI) för att tolka och förstå samband och sökmönster över tid. Exempel på ett sådant mönster kan vara att användare som söker på <i>huvudvärk</i> ofta är intresserade av att förstå orsaken till sin egen huvudvärk och hur den kan behandlas.
				</p>

				<p>
					Sökmotorerna är programmerade för att automatiskt upptäcka dessa sökmönster och, istället för att ge hög placering åt exempelvis Wikipedia eller de webbplatser som nämner ordet <i>huvudvärk</i> flest gånger, prioritera sidor med sådana svar som vanligen efterfrågas. Dina sökresultat beror därför till stor del av vad tidigare användare har valt att klicka vidare på, för samma eller liknande sökningar.
				</p>

				<p>
					Många sökmotorer har utvecklat någon form av kunskapsgraf, enorma och ständigt växande nätverk av data som möjliggör att snabbt spara och hämta relaterad information kring ett ämne.
				</p>

			</div>

			<media-container class="mediaContainer">
				<div>
  				<iframe width="560" height="315" src="https://www.youtube.com/embed/mmQl6VGvX-c" frameborder="0" allowfullscreen></iframe>
  				<div class="caption">
  					Google förklarar principerna kring sökmotorns kunskapsgraf.
  				</div>
  				Källa: <a href="https://www.youtube.com/watch?v=mmQl6VGvX-c" title="Youtube: Introducing the Knowledge Graph" target="_blank">Youtube</a>
				</div>
			</media-container>

			<info-fields class="infoFields">
				<div class="excercise">

					<div class="hBox">
						TESTA SJÄLV: SÖKMOTORERS DJUPFÖRSTÅELSE
					</div>

					<p>
						Använd sökfälten nedan för att jämföra olika sökmotorers djupförståelse.
					</p>

					<search-component query="selma lagerlöf"></search-component>
					<search-component query="huvudvärk"></search-component>
					<search-component query="os"></search-component>

					<div class="hBox">
						DISKUTERA
					</div>

					<ul>
						<li>Upplever du att sökmotorerna har förståelse för vad du letar efter?</li>
						<li>Hur inspirerar de olika sökmotorerna till vidare kunskapssökning?</li>
					</ul>

				</div>

				<div class="summary">

					<div class="hBox">
						SAMMANFATTNING
					</div>

					Sökmotorerna försöker att skapa en djup förståelse kring dina sökningar och hitta samband i stora mängder data. Dina sökresultat beror till stor del på tidigare användares sökmönster.

				</div>

				<div class="more">

					<div class="hBox">
						FÖRDJUPNING
					</div>

					Google presenterar sin kunskapsgraf: <a href="https://www.google.com/intl/bn/insidesearch/features/search/knowledge.html" title="Google: Knowledge graph" target="_blank">The Knowledge Graph</a> (engelska)
				</div>

			</info-fields>

  </div>
</template>

<script>

import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import SearchComponent from '../SearchComponent.vue'
import LocationComponent from '../LocationComponent.vue'

export default {
  components: {
    InfoFields,
    MediaContainer,
    SearchComponent,
    LocationComponent
  },
  data () {
    return {
      'header': 'Sökmotorer på internet: så funkar det!'
    }
  },
  created () {
    let scr = document.createElement('script')
    scr.setAttribute('src', 'https://www.iis.se/graphtool/ggs.php?id=646&width=auto')
    document.head.appendChild(scr)
  }
}
</script>

<style>
</style>
