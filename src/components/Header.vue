<template>
  <div>

    <header id="topnav" class="topnav">

      <div class="menuItem menuDrop responsiveShow" @click="toggleMenu()">
        &#9776; MIKOTEKET
      </div>

      <div class="mikoteket menuItem responsiveHide" @click="goto('/')">
        MIKOTEKET
      </div>

      <div class="menuItem responsiveShow" @click="goto('/')">
        <span>Startsida</span>
      </div>

      <div class="menuItem" @click="goto('/digitalkompetens')">
        <span>Digital kompetens</span>
      </div>

      <div class="menuItem" @click="goto('/workshop')">
        Workshops & föreläsningar
      </div>

      <div class="menuItem" @click="goto('/press')">
        Press & media
      </div>

      <div class="menuItem" @click="goto('/om')">
        Om Mikoteket
      </div>

    </header>

  </div>
</template>

<script>

export default {
  props: {
    quote: {}
  },
  methods: {
    gotoName: function(name,params) {
      this.$router.push({ name: name, params: params})
    },
    goto: function(path) {
      this.$router.push(path)
      this.toggleMenu();
    },
    toggleMenu: function(){
      var x = document.getElementById("topnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
    }
  }
}
</script>

<style scoped>

  header {
    display: flex;
    /*background: #fffae8;*/
    padding: 0px;
    border-top: 2px solid #ff6600;
    border-bottom: 2px solid #ff6600;
    /*min-height: 40px;*/
    height: 3em;
    font-size: small;
    /*justify-content: center; /* horizontal centering */
    filter: grayscale(1) brightness(1);
    /*-webkit-transition: all 0.5s;
    transition: all 0.5s;*/

  }

  header:hover{
    filter: grayscale(0);
    /*height: 6em;*/
  }

  .mikoteket{
    background: #ff6600;
    color: white !important;
  }

  .mikoteket:hover{
    background: transparent !important;
    color: #ff6600 !important;
  }

  .menuItem{
    display: flex;
    align-items: center;
    align-content: center;
    padding: 0px 20px 0px 20px;
    color: #ff6600;

    cursor: pointer;

    text-transform: uppercase;

    font-weight: bolder;

  }

  .menuItem:hover{
    background: #ff6600;
    color: white;
  }

  .topnav .responsiveShow {
    display: none;
  }

  /* Responsive */

  @media screen and (max-width: 600px) {

    /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */

    header{
      height: auto;
    }

    .topnav .menuItem{
      font-size: large;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .topnav .menuItem {
      display: none;
    }

    .topnav .menuDrop {
      display: flex;
    }

    .topnav{
      flex-direction: column;
    }

    /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */

    .topnav.responsive .menuItem:not(.responsiveHide) {
      display: flex;
    }

}

</style>
