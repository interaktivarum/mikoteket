<template>
  <div>

    <header>

      <div class="mikoteket menuItem" @click="goto('/')">MIKOTEKET</div>

      <!--ul>
        <li>
          <a href="">Digital kompetens</a>
        </li>

        <li>
          <a href="">MIK-verktyg</a>
        </li>
      </ul-->
      <div class="menuItem" @click="goto('/digitalkompetens')">
        <span>Digital kompetens</span>
      </div>

      <!--div class="menuItem">
        MIK-verktyg
      </div-->

      <div class="menuItem" @click="goto('/workshop')">
        Workshops & föreläsningar
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
    }
  }
}
</script>

<style scoped>

  header {
    display: flex;
    /*background: #fffae8;*/
    padding: 0px;
    border: 2px solid #ff6600;
    /*min-height: 40px;*/
    height: 3em;
    font-size: small;
    /*justify-content: center; /* horizontal centering */
    filter: grayscale(1) brightness(1);
    -webkit-transition: all 0.5s; /* Safari */
    transition: all 0.5s;

  }

  header:hover{
    filter: grayscale(0);
    /*height: 6em;*/
  }

  .mikoteket{
    display: inline-block;
    background: #ff6600;
    color: white !important;
    font-weight: bolder;
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

    -webkit-transition: all 0.1s; /* Safari */
    transition: all 0.1s;

    text-transform: uppercase;

    font-weight: bolder;

  }

  .menuItem:hover{
    background: #ff6600;
    color: white;
  }

</style>
