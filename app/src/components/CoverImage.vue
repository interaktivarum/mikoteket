<template>
  <div>
    <!--div class="container coverImage" :style="{ backgroundImage: 'url(' + background + ')' }" :class="{'gradient': false, 'collapsed': collapsed}"-->
    <div class="container coverImage">

      <div class="containerInner">

        <div class="columnLeft">
        </div>

        <div class="columnCenter">

          <h1 class="inline-block">{{header}}</h1>

        </div>

        <div class="columnRight">
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import ARoute from '@/components/ARoute.vue'

export default {
  components: {
    ARoute
  },
  props: {
    header: {},
    background: {},
    //collapsed: {default: false},
    route: {},
    routeName: {}
  }
}
</script>

<style scoped>

.coverImage {
  background-attachment: local;
  background-size: cover;
  background-position: center center;

  width: 100%;

  margin: 0px;

}

.gradient{
  background: linear-gradient(160deg, #ff8800 , #ff0000 150%) !important;
  background-attachment: fixed !important;
}

.inline-block{
  display: inline-block;
}

</style>
