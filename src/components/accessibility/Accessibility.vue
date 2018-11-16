<template>
  <div>

    <cover-image header="Inställningar för tillgänglighet"></cover-image>

    <div class="container">

      <div class="containerInner">

        <div class="columnLeft">
        </div>

        <div class="columnCenter">

          <p>
            <a @click="back()">Gå tillbaka till föregående sida</a>
          </p>

          <h3>Mörk bakgrund</h3>
          <p>
            Ljus text på mörk bakgrund kan upplevas som mindre påfrestande för ögonen.
          </p>
          <label class="semibold">
            <input type="checkbox" v-model="accessibility.contrast" />
            Aktivera mörk bakgrund
          </label>

          <h3>Läslinjal</h3>
          <p>
            Läslinjalen mörkar ner skärmen men behåller en ljus strimma som följer musen. Detta kan bidra till ökad fokusering vid läsning av text.
          </p>
          <label class="semibold">
            <input type="checkbox" v-model="accessibility.ruler" />
            Aktivera läslinjal
          </label>

          <h3>Typsnitt för dyslexi</h3>
          <p>
            Typsnittet <a href="https://www.opendyslexic.org/" target="_blank">OpenDyslexic</a> är designat för ökad läsbarhet i syfte att motverka vanliga symptom relaterade till dyslexi.
          </p>
          <label class="semibold">
            <input type="checkbox" v-model="accessibility.dyslexia" />
            Aktivera typsnitt för dyslexi
          </label>

        </div>

        <div class="columnRight">
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';

import CoverImage from '@/components/CoverImage.vue'

export default {
  components: {
    CoverImage,
  },
  props: {
  },
  computed: {
    accessibility: function () {
      return store.state.accessibility
    },
  },
  methods: {
    toggleAccessibility: function (name) {
      store.commit('toggleAccessibility',name);
    },
    back: function () {
      window.history.back();
    }
  }
}
</script>

<style scoped>

</style>
