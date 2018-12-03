<template>
  <span>

    <a :href="href" target="_blank" :title="titleFunc">
      <slot></slot>
    </a>

  </span>
</template>

<script>

export default {
  data() {
    return {
      base: 'https://' + this.lang + '.wiktionary.org/wiki/'
    }
  },
  props: {
    c: {},
    target: {},
    title: {},
    lang: {default: "sv"}
  },
  computed: {
    href: function () {
      return this.base + this.c;
    },
    titleFunc: function () {
      var t = this.title ? this.title : this.c;
      return 'Wiktionary: ' + t;
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
