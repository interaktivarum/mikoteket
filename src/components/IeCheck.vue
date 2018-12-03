<template>
  <div id="IeCheck" v-if="ie">

    Det verkar som att du använder den utdaterade webbläsaren <a href="https://sv.wikipedia.org/wiki/Internet_Explorer" target="_blank">Internet Explorer</a>. Det innebär följande:

    <ul>
      <li>
        <span class="semibold">Din webbläsare har stora säkerhetsluckor</span>: din dator är lättare att hacka.
      </li>
      <li>
        <span class="semibold">Din webbläsare följer inte webbstandarder</span>: många webbplatser, inklusive Mikoteket, kommer att se ut och bete sig konstigt. Hjälpmedel för tillgänglighet fungerar eventuellt inte.
      </li>
    </ul>

    Mikoteket rekommenderar att du istället installerar och använder en modern webbläsare som <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>, <a href="https://www.mozilla.org/sv-SE/firefox/" target="_blank">Mozilla Firefox</a> eller <a href="https://www.microsoft.com/sv-se/windows/microsoft-edge" target="_blank">Microsoft Edge</a>.

  </div>
</template>

<script>

export default {
  props: {
  },
  computed: {
    ie: function () {
      let ua = window.navigator.userAgent;
      return ua.indexOf("MSIE ") > 0;
      return true;
    }
  }
}
</script>

<style scoped>

  #IeCheck {
    padding: 20px;
    background: rgb(240,240,220);
    font-size: smaller;
    position: sticky;
    top: 0;
    z-index: 2;
  }

</style>
