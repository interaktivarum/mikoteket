<template>
  <div>

    <footer>

      <div></div>

      <div>
          Koncept, design & utveckling: <a href="http://www.interaktivarum.se" title="Interaktiva rum" target="_blank">Interaktiva rum</a>
      </div>

      <div>
          Kontakt:
          <a href="mailto:martin@interaktivarum.se">martin@interaktivarum.se</a>
      </div>

      <div></div>

    </footer>

  </div>
</template>

<script>

export default {
  props: {
    quote: {}
  },
  methods: {
  }
}
</script>

<style scoped>

  footer {
    display: flex;
    background: #fafafa;
    margin: 0px;
    padding: 40px;
    border-top: 2px solid #ff6600;
    border-bottom: 2px solid #ff6600;
    /*min-height: 40px;*/
    font-size: smaller;
    filter: grayscale(1) brightness(1);
    -webkit-transition: all 0.5s; /* Safari */
    transition: all 0.5s;

    justify-content: center; /* horizontal centering */
    align-items: center; /* vertical centering */
    align-content: center;

  }

  footer:hover{
    filter: grayscale(0);
    /*height: 6em;*/
  }

  footer > div{
    flex: 1 0 auto;
  }


</style>
