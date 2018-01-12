<template>
  <div>

    <label>
      <input type="checkbox" v-model="state" />{{query}} {{state}}
    </label>

  </div>
</template>

<script>

export default {
  data () {
    return {
      state: false
    }
  },
  props: {
    query: {},
    id: {}
  },
  methods: {
    emit: function(){
      this.$emit('stateChanged', this.id, this.state);
    }
  },
  mounted: function() {
    this.emit();
  },
  watch: {
    state: function() {
      this.emit();
    }
  }
}
</script>

<style scoped>

</style>
