<template>
  <div>

    <cover-image header="Uppdateringar av Mikoteket"></cover-image>

    <div class="container">

      <div class="containerInner">

        <div class="columnLeft">
        </div>

        <div class="columnCenter">

          <div v-for="update in log">
            <h4>
              {{update.date}}
            </h4>
            <ul>
              <li v-for="item in update.items">
                {{item.description}}
              </li>
            </ul>

          </div>

        </div>

        <div class="columnRight">
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import UpdateLog from './updateLog.json'
import CoverImage from '@/components/CoverImage.vue'

export default {
  components: {
    CoverImage
  },
  data: function () {
    return {
      log: UpdateLog.log
    }
  },
  props: {
  }
}
</script>

<style scoped>

</style>
