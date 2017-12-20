<template>
  <div>

    <p class="quote">
      {{quote}}
    </p>

  </div>
</template>

<script>
export default {
  props: {
    quote: {}
  }
}
</script>

<style scoped>

.quote {
	font-size: 24pt;
	font-style: italic;
	text-align: center;
	font-family: serif;
	line-height: 1em;
}

</style>
