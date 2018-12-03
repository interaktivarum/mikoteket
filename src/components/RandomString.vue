<template>
  <span>
    <span v-if="display">{{string}}</span>
  </span>
</template>

<script>
export default {
  props: {
    value: "",
    symbols: {type: String, default: "abcdefghijkmnopqrstuvwxyz23456789"},
    length: {type: Number, default: 8},
    prefix: {type: String, default: ""},
    display: {type: Boolean, default: true},
  },
  computed:{
    string: function () {
      let str = this.prefix;
      for (var i = 0; i < this.length; i++){
        str += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));
      }
      this.updateModel(str);
      return str;
    }
  },
  methods: {
    updateModel: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
</style>
