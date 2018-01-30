<template>
  <div>

    <slide-component>
      <ul>
				<li>Sökmotorernas algoritmer följer givna instruktioner</li>
				<li>Resultaten beror på människors programmering</li>
				<li>AI: påverkas och lär sig av användarnas beteenden</li>
				<li>Speglar både positiva och negativa mönster</li>
			</ul>
    </slide-component>

		<p>
			Sökmotorernas algoritmer är skapade för att tolka sina användares sökningar och presentera relevanta sökresultat. Detta sker helt automatiskt, i.e. inga manuella handpåläggningar görs för enskilda sökningar, men processen styrs av datorprogram som är designade och programmerade av människor. Ett digitalt verktyg följer helt enkelt de steg som dess utvecklare har instruerat den att följa.
		</p>

		<p>
			Varför är detta viktigt att ha i åtanke? Önskvärt vore givetvis att sökmotorer var så smarta att de visste exakt vad vi letade efter och alltid presenterade nyanserade och korrekta svar till våra sökfrågor. Detta är, och kommer aldrig att vara, fallet. Lika lite som du bör lita blint på att en person, oavsett vad du frågar, alltid svarar med en objektiv och korrekt sanning, bör du lita blint på en sökmotors resultat. Du har tidigare sett exempel på hur olika sökmotorer ger olika relevanta sökresultat, allt utifrån hur de är programmerade.
		</p>

		<p>
			Även om så <u>ej är fallet</u> så äger en sökmotor makten att, med bakomliggande programmering, styra sina algoritmer att endast visa resultat som nämner <i>Islam</i> då en användare söker på <i>terrorism</i>.
		</p>

		<p>
			Även söksystem som använder artificiell intelligens och  <a href="https://sv.wikipedia.org/wiki/Maskininl%C3%A4rning" title="Wikipedia: Maskininlärning" target="_blank">maskininlärning</a> för självlärande styrs av bakomliggande kod. Och även om AI är kraftfullt för att minska effekten av programmerarens direkta påverkan på enskilda sökresultat, så påverkas AI-styrda system desto mer av användarnas beteenden. Allteftersom användare söker på termer i stil med <i>terrorism islam</i> riskerar ett system att på sikt förknippa dessa två sökord med varandra.
		</p>

		<p>
			Man kan säga att AI-system inte bara lär sig våra positiva beteenden utan riskerar även att spegla våra fördomar, rädslor och förutfattade meningar - helt enkelt vår personliga <a href="https://sv.wikipedia.org/wiki/Bias_(syns%C3%A4tt)" title="Wikipedia: Bias" target="_blank">bias</a>. Detta är ofta synligt vid bildsökningar, vilka tenderar att spegla och riskerar att förstärka normativa och stereotypa bilder av exempelvis läkare eller terrorister.
		</p>

  	<media-container class="mediaContainer">
  		<div>
        <div class="content">
  			     <iframe width="560" height="315" src="https://www.youtube.com/embed/59bMh59JQDo" frameborder="0" allowfullscreen></iframe>
        </div>
  			<div class="caption">
  				Google förklarar maskininlärning och mänsklig bias.
  			</div>
        <div class="source">
          Källa: <a href="https://www.youtube.com/watch?v=59bMh59JQDo" title="Youtube: Machine Learning and Human Bias" target="_blank">Google (Youtube)</a>
        </div>
  		</div>
  	</media-container>

  	<info-fields class="infoFields">

  		<div class="excercise">

  			<div class="hBox">
  				TESTA SJÄLV: AUTO-COMPLETE - VINKLADE FÖRSLAG OCH RESULTAT
  			</div>

  			<p>
  				Använd sökfälten nedan för att söka på ej avslutade söktermer.
  			</p>

  			<p>
  				<span class="semi-bold">På sökmotorns resultatsida:</span>

  				<ol>
  					<li>Markera sökrutan</li>
  					<li>Fortsätt den befintliga sökningen med mellanslag (aktivera auto-complete)</li>
  					<li>Notera de föreslagna söktermerna</li>
  					<li>Genomför en sökning med några av de olika förslagen</li>
  				</ol>
  			</p>

  			<search-component query="islam är"></search-component>
  			<search-component query="klimatförändringarna är"></search-component>
  			<search-component query="homosexualitet är"></search-component>

  			<div class="hBox">
  				DISKUTERA
  			</div>

  			<ul>
  				<li>Hur kan populära sökförslag påverka dig som användare?</li>
  				<li>Är sökförslagen bra söktermer? Varför/varför inte?</li>
  				<li>Resulterar de olika sökningarna i samma bredd av åsikter som får komma till tal?</li>
  			</ul>
  		</div>


  		<div class="excercise">

  			<div class="hBox">
  				TESTA SJÄLV: VEM ÄR LÄKARE, OCH VEM ÄR TERRORIST? HUR SER EN FAMILJ UT OCH VAD ÄR LYCKA?
  			</div>

  			<p>
  				Använd sökfälten nedan för att göra bildsökningar, och granska bildresultaten normkritiskt.
  			</p>

  			<search-component query="läkare" type="image"></search-component>
  			<search-component query="terrorist" type="image"></search-component>
  			<search-component query="familj" type="image"></search-component>
        <search-component query="lycka" type="image"></search-component>

  			<div class="hBox">
  				DISKUTERA
  			</div>

  			<ul>
  				<li>Vilka sanningar, normer och fördomar speglas i bilderna?</li>
  				<li>Är bilderna rättvisande?</li>
  				<li>Varför visas just dessa bilder?</li>
  				<li>Hur riskerar bildresultaten att påverka användaren?</li>
  			</ul>

  		</div>

  		<div class="summary">

  			<div class="hBox">
  				SAMMANFATTNING
  			</div>

  			Sökmotorerna är programmerade av människor, och algoritmerna följer endast de steg som utvecklaren har angivit. Sökmotorer som använder artificiell intelligens drar nytta av att förstå användarnas sökmönster, men riskerar även att spegla våra fördomar.

  		</div>

  	</info-fields>

  	<h3>Manipulerade sökresultat</h3>

    <slide-component>
  		<ul>
  			<li>Företagen kan programmera om sin algoritmer</li>
  			<li>Styra resultaten i önskad riktning</li>
  			<li>Minska vinklade resultat, undvika blåsväder</li>
  		</ul>
  	</slide-component>

		<p>
			Även om sökmotorerna arbetar automatiskt och är självlärande så är det möjligt för de bakomliggande företagen att, när som helst, programmera om algoritmerna för att påverka sökresultaten i önskad riktning. Syftet kan exempelvis vara att motverka kraftigt vinklad bias, eller att undvika att hamna i politiskt blåsväder.
		</p>

		<p>
			Sökmotorerna porträtterar sig gärna som politiskt neutrala, men stora moraliska beslut kan ofta innebära politiska ställningstaganden. Exempel, som tas upp i Andreas Ekströms presentation nedan, är Googles ställningstaganden till att manuellt justera sina algoritmer för att påverka bildresultat för <i>Michelle Obama</i> och <i>Anders Breivik</i>.
		</p>

  	<media-container class="mediaContainer">
  		<div>
        <div class="content">
          <div style="max-width:100%"><div style="position:relative;height:0;padding-bottom:50.25%"><iframe src="https://embed.ted.com/talks/lang/sv/andreas_ekstrom_the_moral_bias_behind_your_search_results" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>
        </div>
  			<div class="caption">
  				TED Talk av Andreas Ekström, The moral bias behind your search results.
  			</div>
        <div class="source">
          Källa: Andreas Ekström, <a href="https://www.ted.com/talks/andreas_ekstrom_the_moral_bias_behind_your_search_results?utm_campaign=tedspread--a&utm_medium=referral&utm_source=tedcomshare" title="TED Talk" target="_blank">TED</a>
        </div>
  		</div>
  	</media-container>

  	<info-fields class="infoFields">
  		<div class="summary">

  			<div class="hBox">
  				SAMMANFATTNING
  			</div>

  			Företagen kan programmera om sina sökmotorer för att styra sökresultaten i önskad riktning. Exempelvis för att minska kraftig bias eller för att undvika politiskt blåsväder.
  		</div>
  	</info-fields>

  </div>
</template>

<script>

import InfoFields from '@/components/learn/InfoFields.vue'
import MediaContainer from '@/components/learn/MediaContainer.vue'
import SearchComponent from '@/components/learn/SearchComponent.vue'
import SlideComponent from '@/components/learn/SlideComponent.vue'

export default {
  components: {
    InfoFields,
    MediaContainer,
    SearchComponent,
    SlideComponent
  },
  data () {
    return {
      'header': 'AI och mänsklig bias'
    }
  },
  created () {
  }
}
</script>

<style>
</style>
