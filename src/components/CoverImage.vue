<template>
  <div>
    <!--div class="container coverImage" :style="{ backgroundImage: 'url(' + background + ')' }" :class="{'gradient': false, 'collapsed': collapsed}"-->
    <div class="container coverImage">

      <div class="containerInner">

        <div class="columnLeft">
        </div>

        <div class="columnCenter">

          <span class="header">{{header}}</span>

        </div>

        <div class="columnRight">
        </div>

        <slot></slot>

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
    collapsed: {default: false},
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

  padding: 30px 0px 30px 0px;
  margin: 0px;

  /*color: rgba(255,255,255,0.9);*/

}

.coverImage.margin{
  margin-bottom: 50px;
}

.gradient{
  background: linear-gradient(160deg, #ff8800 , #ff0000 150%) !important;
  background-attachment: fixed !important;
}

.header{
  font-size: 32pt;
  padding-bottom: 5px;
  border-bottom: 5px solid #ff6600;
  /*color: rgba(255,255,255,0.9);*/
}

.coverImage.collapsed{
  margin-bottom: 0px;
}

.coverImage.collapsed{
  font-size: 14pt;
  font-weight: 300;
  padding: 20px 0px 20px 0px;
}

.coverImage >>> a{
  /*background: rgba(255,255,255,0.75);
  color: #ff6600 !important;*/
  color: rgba(255,255,255,0.9) !important;

  font-weight: 300;

  -webkit-transition: all 0.1s; /* Safari */
  transition: all 0.1s;
}

.coverImage >>> a:hover{
  background: rgba(255,255,255,0.9);
  color: #ff6600 !important;
}

</style>
