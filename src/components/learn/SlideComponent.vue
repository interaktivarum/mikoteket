<template>
  <div>

    <a @click="fullscreen()" class="button" title="Klicka för att visa slide">
      Visa slide &#8599;
    </a>

    <div class="abackground" @click="close()">
      <div class="slide" @click="close()" title="Klicka eller tryck Esc för att stänga slide">

        <div class="content">
          <slot></slot>
        </div>

        <!--a @click="close()" class="button">Stäng slide</a-->

      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      el: null
    }
  },
  props: {
  },
  methods: {
    fullscreen(){
      this.el.style.display = "flex";
      window.addEventListener('keyup', this.keyClose);
    },
    close(){
      this.el.style.display = "none";
      window.removeEventListener('keyup', this.keyClose);
    },
    keyClose(e){
      if(e.key == "Escape"){
        this.close();
      }
    }
  },
  mounted: function(){
    this.el = this.$el.querySelector(".slide");
  }
}
</script>

<style scoped>

.button{
}

@media screen and (max-width: 600px) {
  .button{
    display: none;
  }
}

.background{
  /*background: rgba(0,0,0,0.5);*/
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: none;
}

.slide{
  /*position: fixed;
  top: 50px;
  left: 50px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);*/

  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: 200px;

  z-index: 100;

  display: flex;
  justify-content: center;

  background: #fafafa;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  box-shadow: 0px 0px 10px #333;

  overflow-y: scroll;
  display: none;

  cursor: n-resize;

}

.content{
  font-size: 25pt;
  font-weight: bold;
  line-height: normal;
  max-width: 100%;
  white-space: pre-line;
}

.content:hover li:not(:hover){
  color: lightgray;
}

.component > .slide-component{
  display: none;
}

</style>
