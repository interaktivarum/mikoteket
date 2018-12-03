<template>
  <span>

    <a :href="href()" target="_blank" :title="titleFunc()">
      <slot></slot>
    </a>

  </span>
</template>

<script>

export default {
  data() {
    return {
      base: 'https://' + this.lang + '.wikipedia.org/wiki/'
    }
  },
  props: {
    c: {},
    target: {},
    title: {},
    lang: {default: "sv"}
  },
  methods: {
    href: function () {
      return this.base + this.c;
    },
    titleFunc: function () {
      var t = this.title ? this.title : this.c;
      return 'Wikipedia: ' + t;
    }

  }
}
</script>

<style scoped>
</style>
