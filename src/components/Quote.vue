<template>
  <div>

    <p class="quote">
      {{quote}}
    </p>

    <p class="by">
        <strong>{{by}}</strong>
        <br />
        {{description}}
    </p>

  </div>
</template>

<script>
export default {
  props: {
    quote: {},
    by: {},
    description: {}
  }
}
</script>

<style scoped>

.quote {
	font-size: 20pt;
	font-style: italic;
	text-align: center;
	font-family: serif;
	line-height: 1em;
  color: #555;
  margin-bottom: 10px;
  -webkit-transition: all 0.25s;
	transition: all 0.25s;
}

.quote:hover {
  color: black;
}

.by {
	font-size: 12pt;
	font-style: normal;
	text-align: right;
	line-height: 1em;
  color: #000;
  margin-top: 10px;
}

</style>
