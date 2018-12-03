<template>
  <div class="template">
    {{notions.unesco[notion]}}
  </div>
</template>

<script>

import notions from '@/assets/notions.json'

export default {
  components: {
  },
  data () {
    return {
      notions: notions
    }
  },
  props: {
    notion: ''
  }
}
</script>

<style scoped>
  .template{
    display: inline-block;
    background: #aaa;
    color: white;
    padding: 2px 4px 2px 4px;
    margin: 1px;
    border-radius: 0px;
    font-weight: 400;
    font-size: smaller;
  }

  .template2{
    display: inline-block;
  }
</style>
