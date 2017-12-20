<template>
<div>

  <cover-image header="Mikoteket"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">
      </div>

      <div class="columnCenter">

        Mikoteket är en samlingsplats för MIK-verktyg och -utbildning.

      </div>

      <div class="columnRight">
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import CoverImage from '../CoverImage.vue'

export default {
  components: {
    CoverImage
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
  }
}
</script>

<style>
</style>
