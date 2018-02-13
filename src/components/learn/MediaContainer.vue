<template>
  <div>

    <slot></slot>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mediaContainer{
	/*font-family: "Times new roman";*/
	display: flex;
	align-items: center;
	justify-content: center;
	color: #333;
	font-size: smaller;
	margin: 30px 0px 30px 0px;
  width: 100%;
  max-width: 100%;
}

.mediaContainer > div{
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /*text-align: center;*/
  /*align-items: center;*/
}

.mediaContainer .content{
}

.mediaContainer img{
  max-height: 500px;
  max-width: 100%;
}

@media screen and (max-width: 600px) {

  .mediaContainer .content{
    position: relative;
  	padding-bottom: 56.25%; /* 16:9 */
  	height: 0;
  }

  .mediaContainer .content * {
  	position: absolute;
  	top: 0;
  	left: 0;
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
  }

  .mediaContainer .image img{
    max-width: 100%;
    max-height: none;
  }

}

.mediaContainer .caption{
	margin: 5px 0px 5px 0px;
	line-height: 1.2em;
  color: #555;
}

.mediaContainer .source{
	margin: 5px 0px 5px 0px;
	line-height: 1.2em;
  color: #555;
}

</style>
