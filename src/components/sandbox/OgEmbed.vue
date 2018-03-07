<template>
  <div>

    Url: {{url}}

  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    url: {}
  },
  created: function () {
    var formData = new FormData();
    //formData.append('foo', 'bar');
    console.log(this)
    this.$http.post(this.url, formData)
  }
}
</script>

<style scoped>
</style>
