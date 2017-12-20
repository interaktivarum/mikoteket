<template>
  <span>

    <a href="" @click="goto(href)" :target="target" :title="title">
      <slot></slot>
    </a>

  </span>
</template>

<script>

export default {
  props: {
    href: {},
    target: {},
    title: {}
  },
  methods: {
    gotoName: function(name,params) {
      this.$router.push({ name: name, params: params})
    },
    goto: function(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
</style>
